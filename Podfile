# You Podfile should look similar to this file. React Native currently does not support use_frameworks!
source 'https://github.com/CocoaPods/Specs.git'

platform :ios, '8.0'

# Change 'iosGoogleMaps' to match the target in your Xcode project.
target 'iosGoogleMaps' do
  pod 'React', path: '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTActionSheet',
    'RCTAnimation',
    'RCTGeolocation',
    'RCTImage',
    'RCTLinkingIOS',
    'RCTNetwork',
    'RCTSettings',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket'
  ]

  pod 'GoogleMaps'  # <~~ remove this line if you do not want to support GoogleMaps on iOS

# when not using frameworks  we can do this instead of including the source files in our project (1/4):
#  pod 'react-native-maps', path: '../../'
#  pod 'react-native-google-maps', path: '../../'  # <~~ if you need GoogleMaps support on iOS
end