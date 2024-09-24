"use client"

import React, { useState, useEffect } from 'react'
import { Cake, X, Loader, ExternalLink } from 'lucide-react'

export default function BirthdayWish() {
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isVideoVisible) {
      const timer = setTimeout(() => {
        if (isLoading) {
          setError("视频加载时间过长，可能出现了问题。")
        }
      }, 10000) // 10秒后如果还在加载，显示错误信息

      return () => clearTimeout(timer)
    }
  }, [isVideoVisible, isLoading])

  const showVideo = () => {
    setIsVideoVisible(true)
    setIsLoading(true)
    setError(null)
  }

  const hideVideo = () => {
    setIsVideoVisible(false)
    setIsLoading(true)
    setError(null)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setError("视频加载失败，请尝试直接访问bilibili观看。")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-800">生日快乐！</h1>
      
      {!isVideoVisible ? (
        <button
          onClick={showVideo}
          className="text-9xl hover:scale-110 transition-transform duration-300 ease-in-out"
          aria-label="播放生日祝福"
        >
          <Cake className="text-pink-600" />
        </button>
      ) : (
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-4">
          <button
            onClick={hideVideo}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10"
            aria-label="关闭视频"
          >
            <X className="w-6 h-6 text-pink-600" />
          </button>
          {isLoading && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-20">
              <Loader className="w-12 h-12 text-pink-600 animate-spin" />
            </div>
          )}
          {!error && (
            <iframe
              src="//player.bilibili.com/player.html?isOutside=true&aid=287950641&bvid=BV1Bf4y1v7ww&cid=259397743&p=1"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full aspect-video"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
          {(isLoading || error) && (
            <div className="text-center text-gray-600 mt-4">
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <p>视频加载中，请稍候...</p>
              )}
              <a
                href="https://www.bilibili.com/video/BV1Bf4y1v7ww"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:underline mt-2"
              >
                直接在bilibili观看 <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          )}
        </div>
      )}
      
      <p className="mt-8 text-center text-xl text-pink-800">
        点击蛋糕图标来播放张艺兴的生日祝福！
      </p>
    </div>
  )
}