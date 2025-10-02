#include "pch.h"
#include "ReactPackageProvider.h"
#include "ReactPackageProvider.g.cpp"

#include "ReactNativeBlobUtil.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::ReactNativeBlobUtil::implementation {

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept {
  AddAttributedModules(packageBuilder);
}

} // namespace winrt::ReactNativeBlobUtil::implementation
