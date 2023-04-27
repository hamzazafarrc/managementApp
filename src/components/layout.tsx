import React from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import If from './if';
import  commonStyles  from '@styles/commonStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface ILayoutProps {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    fixed?: boolean;
    children?: any;
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    containerStyle,
    fixed,
    contentContainerStyle,
}) => {
    return (
        <>
            <If condition={fixed}>
                <View
                    style={[commonStyles.main, containerStyle]}>
                    {children}
                </View>
            </If>
            <If condition={!fixed}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    style={[commonStyles.main, containerStyle]}
                    contentContainerStyle={contentContainerStyle}>
                    {children}
                </KeyboardAwareScrollView>
            </If>
        </>
    );
};

export default Layout;
