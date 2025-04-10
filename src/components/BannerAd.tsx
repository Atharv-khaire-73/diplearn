import React from 'react';

interface BannerAdProps {
  className?: string;
  slot?: 'first' | 'second' | 'sidebar' | 'third';
  format?: 'leaderboard' | 'rectangle' | 'skyscraper';
  customKey?: string;
  customWidth?: number;
  customHeight?: number;
}

interface BannerAdState {
  isVisible: boolean;
  adBlockerDetected: boolean;
  isDevelopment: boolean;
}

class BannerAd extends React.Component<BannerAdProps, BannerAdState> {
  adContainer = React.createRef<HTMLDivElement>();
  uniqueId = `ad_${Math.random().toString(36).substring(2, 9)}`;
  
  constructor(props: BannerAdProps) {
    super(props);
    
    this.state = {
      isVisible: true,
      adBlockerDetected: false,
      isDevelopment: false
    };
  }
  
  componentDidMount() {
    // Check if ad blocker is detected using the global window property
    // that might be set by the AdBlockDetector component
    const checkAdBlocker = () => {
      if ((window as any).adBlockerDetected === true) {
        this.setState({ adBlockerDetected: true });
        return true;
      }
      return false;
    };
    
    // If ad blocker is detected, don't try to load ads
    if (checkAdBlocker()) {
      return;
    }
    
    // Otherwise proceed with loading the ad
    this.loadAd();
    
    // Set up periodic checks for ad blocker detection
    this.adBlockerCheckInterval = setInterval(() => {
      if (checkAdBlocker()) {
        clearInterval(this.adBlockerCheckInterval);
      }
    }, 1000);
  }
  
  componentWillUnmount() {
    if (this.adBlockerCheckInterval) {
      clearInterval(this.adBlockerCheckInterval);
    }
  }
  
  adBlockerCheckInterval: any = null;
  
  componentDidUpdate(prevProps: BannerAdProps) {
    if ((prevProps.slot !== this.props.slot || prevProps.format !== this.props.format) && !this.state.adBlockerDetected) {
      this.loadAd();
    }
  }
  
  getAdDimensions() {
    const { format = 'leaderboard', customWidth, customHeight } = this.props;
    
    // If custom dimensions are provided, use them instead
    if (customWidth && customHeight) {
      return { width: customWidth, height: customHeight };
    }
    
    switch (format) {
      case 'rectangle':
        return { width: 300, height: 250 };
      case 'skyscraper':
        return { width: 160, height: 600 };
      case 'leaderboard':
      default:
        return { width: 728, height: 90 };
    }
  }
  
  loadAd() {
    if (!this.adContainer.current || !this.state.isVisible) return;
    
    // Clear any existing content
    this.adContainer.current.innerHTML = '';
    
    // Use custom key if provided, otherwise use default based on slot
    const { customKey, slot = 'first' } = this.props;
    let adKey = customKey;
    
    if (!adKey) {
      // Use different keys for different slots
      if (slot === 'sidebar') {
        adKey = '5dc2ce15743f866e2634d2523966780e';
      } else if (slot === 'third') {
        adKey = '5dc2ce15743f866e2634d2523966780e';
      } else {
        adKey = 'bc7ad908b9b26c08f097d12764e1d4be';
      }
    }
    
    const { width, height } = this.getAdDimensions();
    
    try {
      // Each ad must have its own isolated scope to prevent conflicts
      const iframe = document.createElement('iframe');
      iframe.style.width = `${width}px`;
      iframe.style.height = `${height}px`;
      iframe.style.border = 'none';
      iframe.scrolling = 'no';
      this.adContainer.current.appendChild(iframe);
      
      // Create document inside iframe
      const iframeDoc = iframe.contentWindow?.document;
      if (!iframeDoc) return;
      
      // Write the ad scripts into the iframe
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { margin: 0; padding: 0; overflow: hidden; }
          </style>
        </head>
        <body>
          <div id="ad-container"></div>
          <script type="text/javascript">
            atOptions = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height},
              'width' : ${width},
              'params' : {}
            };
          </script>
          <script type="text/javascript" src="//solemnbible.com/${adKey}/invoke.js"></script>
        </body>
        </html>
      `);
      iframeDoc.close();
    } catch (error) {
      console.error('Error loading ad:', error);
      
      // Fallback method if iframe approach fails
      try {
        const uniqueVarName = `atOptions_${this.uniqueId}`;
        const scriptContainer = document.createElement('div');
        scriptContainer.innerHTML = `
          <script type="text/javascript">
            var ${uniqueVarName} = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height},
              'width' : ${width},
              'params' : {}
            };
            (function() {
              atOptions = ${uniqueVarName};
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = '//solemnbible.com/${adKey}/invoke.js';
              document.getElementById('${this.uniqueId}').appendChild(s);
            })();
          </script>
        `;
        this.adContainer.current.appendChild(scriptContainer);
      } catch (fallbackError) {
        console.error('Fallback ad loading also failed:', fallbackError);
      }
    }
  }
  
  handleClose = () => {
    this.setState({ isVisible: false });
  };
  
  render() {
    const { className, format = 'leaderboard' } = this.props;
    const { isVisible, adBlockerDetected } = this.state;
    const { width, height } = this.getAdDimensions();
    
    if (!isVisible) {
      return null;
    }
    
    // If ad blocker is detected, render a placeholder
    if (adBlockerDetected) {
      return (
        <div className={`relative overflow-hidden ${className || ''}`}>
          <div 
            className="ad-container w-full h-full flex justify-center items-center bg-gray-200 border border-gray-300"
            style={{ minHeight: `${height}px` }}
          >
            <p className="text-sm text-gray-500">
              Ad content (blocked)
            </p>
          </div>
        </div>
      );
    }
    
    return (
      <div className={`relative overflow-hidden ${className || ''}`}>
        <div 
          className="ad-container w-full h-full flex justify-center items-center"
          style={{ minHeight: `${height}px` }}
        >
          <div
            ref={this.adContainer}
            className="flex justify-center items-center w-full h-full"
            style={{ minHeight: `${height}px`, minWidth: `${width}px` }}
            id={this.uniqueId}
          />
        </div>
        <button 
          onClick={this.handleClose}
          className="absolute top-1 right-1 bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md hover:bg-gray-900 focus:outline-none z-10"
          aria-label="Close advertisement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    );
  }
}

export default BannerAd;