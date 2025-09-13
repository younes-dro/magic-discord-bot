'use client'
export default function Loading() {
    <style jsx>
  {`
    .animate-loading {
      animation: loadingAnimation 2s infinite;
    }

    @keyframes loadingAnimation {
      0%, 100% {
        transform: scaleX(0);
      }
      50% {
        transform: scaleX(1);
      }
    }
  `}
</style>

    return (
        
      <div className="fixed top-0 left-0 w-full h-1 bg-red-500 animate-loading"></div>
    );
  }
  