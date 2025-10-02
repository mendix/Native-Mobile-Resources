package com.fileviewerturbo

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap

class FileViewerTurboModule(reactContext: ReactApplicationContext) : NativeFileViewerTurboSpec(reactContext) {
  private var implementation: FileViewerTurboModuleImpl = FileViewerTurboModuleImpl(reactContext)

  override fun getName(): String = FileViewerTurboModuleImpl.NAME

  override fun open(path: String?, options: ReadableMap?, promise: Promise?) {
    implementation.open(path, options, promise)
  }

  override fun addListener(eventType: String?) {
    //
  }

  override fun removeListeners(count: Double) {
    //
  }
}
