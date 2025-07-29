# 🚀 Deploy Lines NFT as Farcaster Frame Mini App

## 📋 Prerequisites

1. **Vercel Account** - For hosting the app
2. **Domain/Subdomain** - For proper Frame functionality
3. **Farcaster Account** - For testing and sharing
4. **GitHub Repository** - For code deployment

## 🔧 Environment Variables

Create a `.env.local` file with:

\`\`\`env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
\`\`\`

## 🚀 Deployment Steps

### 1. Deploy to Vercel

\`\`\`bash
# Clone and prepare
git clone <your-repo>
cd lines-nft-multichain

# Install dependencies
npm install

# Deploy to Vercel
npx vercel --prod

# Set environment variables in Vercel dashboard
\`\`\`

### 2. Configure Farcaster Frame

Your app automatically includes Farcaster Frame metadata:

- **Frame Image**: Generated dynamically with art preview
- **Frame Buttons**: 
  - 🎨 Generate Art
  - 🌐 Switch Network  
  - ⚡ Mint NFT
  - 🧪 Test Networks

### 3. Frame Endpoints

- **Frame Handler**: `/api/frame` - Handles all frame interactions
- **Frame Image**: `/api/frame/image` - Generates frame images
- **Art Generator**: `/api/frame/art` - Creates unique art images
- **Frame Page**: `/frame` - Initial frame landing page

### 4. Test Your Frame

1. **Share Frame URL**: `https://your-domain.vercel.app/frame`
2. **Test in Warpcast**: Paste URL in a cast
3. **Verify Buttons**: Test all frame interactions
4. **Check Images**: Ensure all images load correctly

## 🎯 Frame Features

### 🎨 Art Generation
- **Deterministic Art**: Based on seed values
- **Frame Images**: Generated via Next.js ImageResponse
- **Interactive**: Generate new art via frame buttons

### 🌐 Network Switching
- **Multi-Chain**: Support for all 11 networks
- **Visual Selection**: Network picker in frame
- **Status Display**: Current network indicator

### ⚡ Minting Flow
- **Frame-Based**: Complete minting process in frame
- **Network Aware**: Shows supported networks
- **Transaction Links**: Direct to explorers

### 🧪 Network Testing
- **Automated Testing**: Test all networks via frame
- **Visual Results**: Success/failure indicators  
- **Performance Metrics**: Gas prices, switch times

## 🔍 Frame Structure

\`\`\`
/frame                  -> Initial frame page
/api/frame             -> Frame interaction handler
/api/frame/image       -> Main frame image
/api/frame/art         -> Generated art images
/api/frame/networks    -> Network selection
/api/frame/mint        -> Minting interface
/api/frame/test        -> Network testing
\`\`\`

## 📱 Mobile Optimization

- **Responsive Design**: Works on all devices
- **Touch Interactions**: Optimized for mobile
- **Fast Loading**: Optimized images and assets
- **Progressive Enhancement**: Works without JavaScript

## 🛠 Debugging

### Frame Validator Tools
- **Warpcast Frame Validator**: Test frame metadata
- **Farcaster Debugger**: Check frame responses
- **Browser DevTools**: Debug API responses

### Common Issues
- **CORS**: Ensure proper CORS headers
- **Images**: Verify image URLs are accessible
- **Metadata**: Check all required frame metadata
- **HTTPS**: Must use HTTPS in production

## 🚀 Go Live

1. **Deploy**: Push to Vercel
2. **Verify**: Test all frame functionality  
3. **Share**: Post frame URL in Farcaster
4. **Monitor**: Check analytics and usage

Your Lines NFT Frame is now live on Farcaster! 🎉

## 📊 Analytics

Track frame usage via:
- **Vercel Analytics**: Page views and performance
- **Frame Interactions**: Button clicks and conversions
- **Network Usage**: Which chains are most popular
- **Minting Statistics**: Success rates per network
