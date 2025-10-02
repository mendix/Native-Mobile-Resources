package com.fileviewerturbo

import com.facebook.react.bridge.BridgeReactContext
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap

class FileViewerTurboModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  private var implementation: FileViewerTurboModuleImpl = FileViewerTurboModuleImpl(context)

  override fun getName(): String = FileViewerTurboModuleImpl.NAME

  @ReactMethod
  fun open(path: String, options: ReadableMap, promise: Promise) {
    implementation.open(path, options, promise)
  }

  @ReactMethod
  fun addListener(type: String?) {
    //
  }

  @ReactMethod
  fun removeListeners(type: Int?) {
    //
  }
}
