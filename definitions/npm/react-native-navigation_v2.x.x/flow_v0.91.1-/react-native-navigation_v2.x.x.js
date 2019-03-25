declare module 'react-native-navigation' {
  /* --- Options --- */
  declare export type ImageRequireSource = number; // require('./icon.png')
  declare export type Insets = {|
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
  |};

  declare export type Color = string;
  declare export type FontFamily = string;
  declare export type LayoutOrientation = 'portrait' | 'landscape';
  declare export type AndroidDensityNumber = number;
  declare export type SystemItemIcon =
    | 'done'
    | 'cancel'
    | 'edit'
    | 'save'
    | 'add'
    | 'flexibleSpace'
    | 'fixedSpace'
    | 'compose'
    | 'reply'
    | 'action'
    | 'organize'
    | 'bookmarks'
    | 'search'
    | 'refresh'
    | 'stop'
    | 'camera'
    | 'trash'
    | 'play'
    | 'pause'
    | 'rewind'
    | 'fastForward'
    | 'undo'
    | 'redo';
  declare export type OptionsSplitView = {|
    displayMode?: 'auto' | 'visible' | 'hidden' | 'overlay',
    primaryEdge?: 'leading' | 'trailing',
    minWidth?: number,
    maxWidth?: number,
  |};
  declare export type OptionsStatusBar = {|
    visible?: boolean,
    style?: 'light' | 'dark',
    backgroundColor?: Color,
    drawBehind?: boolean,
  |};
  declare export type OptionsLayout = {|
    backgroundColor?: Color,
    componentBackgroundColor?: Color,
    orientation?: LayoutOrientation[],
    topMargin?: number,
    direction?: 'rtl' | 'ltr',
  |};

  declare export type OptionsModalPresentationStyle =
    | 'formSheet'
    | 'pageSheet'
    | 'overFullScreen'
    | 'overCurrentContext'
    | 'currentContext'
    | 'popOver'
    | 'fullScreen'
    | 'none';

  declare export type OptionsModalTransitionStyle =
    | 'coverVertical'
    | 'crossDissolve'
    | 'flipHorizontal'
    | 'partialCurl';
  declare export type OptionsTopBarLargeTitle = {|
    visible?: boolean,
    fontSize?: number,
    color?: Color,
    fontFamily?: FontFamily,
  |};
  declare export type OptionsTopBarTitle = {|
    text?: string,
    fontSize?: number,
    color?: Color,
    fontFamily?: FontFamily,
    component?: {
      id?: string,
      name: string,
      alignment?: 'center' | 'fill',
      passProps?: {},
    },
    height?: number,
    alignment?: 'center' | 'fill',
  |};
  declare export type OptionsTopBarSubtitle = {|
    text?: string,
    fontSize?: number,
    color?: Color,
    fontFamily?: FontFamily,
    alignment?: 'center',
  |};
  declare export type OptionsTopBarBackButton = {|
    icon?: ImageRequireSource,
    visible?: boolean,
    title?: string,
    showTitle?: boolean,
    color?: Color,
  |};
  declare export type OptionsTopBarBackground = {|
    color?: Color,
    clipToBounds?: boolean,
    component?: {
      name?: string,
    },
    translucent?: boolean,
    blur?: boolean,
  |};
  declare export type OptionsTopBarButton = {|
    id: string,
    icon?: ImageRequireSource,
    iconInsets?: IconInsets,
    component?: {
      name: string,
      passProps?: {},
    },
    systemItem?: SystemItemIcon,
    text?: string,
    fontFamily?: string,
    enabled?: boolean,
    disableIconTint?: boolean,
    color?: Color,
    disabledColor?: Color,
    testID?: string,
  |};
  declare export type OptionsTopBar = {|
    visible?: boolean,
    animate?: boolean,
    hideOnScroll?: boolean,
    buttonColor?: Color,
    drawBehind?: boolean,
    testID?: string,
    title?: OptionsTopBarTitle,
    subtitle?: OptionsTopBarSubtitle,
    backButton?: OptionsTopBarBackButton,
    leftButtons?: OptionsTopBarButton[],
    rightButtons?: OptionsTopBarButton[],
    background?: OptionsTopBarBackground,
    barStyle?: 'default' | 'black',
    noBorder?: boolean,
    searchBar?: boolean,
    searchBarHiddenWhenScrolling?: boolean,
    searchBarPlaceholder?: string,
    hideNavBarOnFocusSearchBar?: boolean,
    largeTitle?: OptionsTopBarLargeTitle,
    height?: AndroidDensityNumber,
    borderColor?: Color,
    borderHeight?: AndroidDensityNumber,
    elevation?: AndroidDensityNumber,
  |};
  declare export type OptionsFab = {|
    id: string,
    backgroundColor?: Color,
    clickColor?: Color,
    rippleColor?: Color,
    visible?: boolean,
    icon?: ImageRequireSource,
    iconColor?: Color,
    alignHorizontally?: 'left' | 'right',
    alignVertically?: 'top' | 'bottom',
    hideOnScroll?: boolean,
    size?: number,
    actions?: OptionsFab[],
  |};
  declare export type OptionsBottomTabs = {|
    visible?: boolean,
    animate?: boolean,
    currentTabIndex?: number,
    currentTabId?: string,
    testID?: string,
    drawBehind?: boolean,
    backgroundColor?: Color,
    tabsAttachMode?: 'together' | 'afterInitialTab' | 'onSwitchToTab',
    barStyle?: 'default' | 'black',
    translucent?: boolean,
    hideShadow?: boolean,
    titleDisplayMode?: 'alwaysShow' | 'showWhenActive' | 'alwaysHide',
    elevation?: AndroidDensityNumber,
  |};
  declare export type OptionsBottomTab = {|
    text?: string,
    badge?: string,
    badgeColor?: string,
    testID?: string,
    icon?: ImageRequireSource,
    iconColor?: Color,
    textColor?: Color,
    selectedIconColor?: Color,
    selectedTextColor?: Color,
    fontFamily?: FontFamily,
    fontSize?: number,
    iconInsets?: Insets,
    selectedIcon?: ImageRequireSource,
    disableIconTint?: boolean,
    disableSelectedIconTint?: boolean,
    selectedFontSize?: number,
  |};
  declare export type SideMenuSide = {|
    visible?: boolean,
    enabled?: boolean,
  |};
  declare export type OptionsSideMenu = {|
    left?: SideMenuSide,
    right?: SideMenuSide,
    openGestureMode?: 'entireScreen' | 'bezel',
  |};
  declare export type OptionsOverlay = {|
    interceptTouchOutside?: boolean,
  |};
  declare export type OptionsPreviewAction = {|
    id: string,
    title: string,
    style?: 'default' | 'selected' | 'destructive',
    actions?: OptionsPreviewAction[],
  |};
  declare export type OptionsPreview = {|
    reactTag?: number,
    width?: number,
    height?: 100,
    commit?: boolean,
    actions?: OptionsPreviewAction[],
  |};
  declare export type OptionsAnimationPropertyConfig = {|
    from?: number,
    to?: number,
    duration?: number,
    startDelay?: number,
    interpolation?: 'accelerate' | 'decelerate',
  |};

  declare export type ScreenAnimationOptions = {|
    x?: OptionsAnimationPropertyConfig,
    y?: OptionsAnimationPropertyConfig,
    alpha?: OptionsAnimationPropertyConfig,
    scaleX?: OptionsAnimationPropertyConfig,
    scaleY?: OptionsAnimationPropertyConfig,
    rotationX?: OptionsAnimationPropertyConfig,
    rotationY?: OptionsAnimationPropertyConfig,
    rotation?: OptionsAnimationPropertyConfig,
    waitForRender?: boolean,
    enabled?: boolean,
  |};
  declare export type IconInsets = {|
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
  |};
  declare export type ViewAnimationOptions = {|
    ...ScreenAnimationOptions,
    id?: string,
  |};

  declare export type StackAnimationOptions = {|
    waitForRender?: boolean,
    enabled?: boolean,
    topBar?: ViewAnimationOptions,
    bottomTabs?: ViewAnimationOptions,
    content?: ViewAnimationOptions,
  |};

  declare export type AnimationOptions = {|
    setRoot?: ScreenAnimationOptions,
    push?: StackAnimationOptions,
    pop?: StackAnimationOptions,
    showModal?: ScreenAnimationOptions,
    dismissModal?: ScreenAnimationOptions,
  |};
  declare export type OptionsCustomTransition = {|
    animations: OptionsCustomTransitionAnimation[],
    duration?: number,
  |};
  declare export type OptionsCustomTransitionAnimation = {|
    type: 'sharedElement',
    fromId: string,
    toId: string,
    startDelay?: number,
    springVelocity?: number,
    duration?: number,
  |};
  declare export type Options = {|
    statusBar?: OptionsStatusBar,
    layout?: OptionsLayout,
    modalPresentationStyle?: OptionsModalPresentationStyle,
    modalTransitionStyle?: OptionsModalTransitionStyle,
    topBar?: OptionsTopBar,
    fab?: OptionsFab,
    bottomTabs?: OptionsBottomTabs,
    bottomTab?: OptionsBottomTab,
    sideMenu?: OptionsSideMenu,
    splitView?: OptionsSplitView,
    overlay?: OptionsOverlay,
    animations?: AnimationOptions,
    customTransition?: OptionsCustomTransition,
    preview?: OptionsPreview,
    popGesture?: boolean,
    backgroundImage?: ImageRequireSource,
    rootBackgroundImage?: ImageRequireSource,
    blurOnUnmount?: boolean,
  |};
  /* --- Options end --- */

  /* --- Layout --- */
  declare export type LayoutComponent = {|
    id?: string,
    name: string | number,
    options?: Options,
    passProps?: {},
  |};
  declare export type LayoutStackChildren = {|
    component?: LayoutComponent,
  |};
  declare export type LayoutStack = {|
    id?: string,
    children?: LayoutStackChildren[],
    options?: Options,
  |};
  declare export type LayoutBottomTabsChildren = {|
    stack?: LayoutStack,
    component?: LayoutComponent,
  |};
  declare export type LayoutBottomTabs = {|
    id?: string,
    children?: LayoutBottomTabsChildren[],
    options?: Options,
  |};
  declare export type LayoutSideMenu = {|
    id?: string,
    left?: LayoutStackChildren,
    center: Layout,
    right?: LayoutStackChildren,
    options?: Options,
  |};
  declare export type LayoutSplitView = {|
    id?: string,
    master?: Layout,
    detail?: Layout,
    options?: Options,
  |};
  declare export type TopTabs = {|
    id?: string,
    children?: any[],
    options?: Options,
  |};
  declare export type LayoutRoot = {|
    root: Layout,
  |};
  declare export type ExternalComponent = {|
    id?: string,
    name: string | number,
    options?: Options,
    passProps?: {},
  |};
  declare export type Layout = {|
    component?: LayoutComponent,
    stack?: LayoutStack,
    bottomTabs?: LayoutBottomTabs,
    sideMenu?: LayoutSideMenu,
    splitView?: LayoutSplitView,
    topTabs?: TopTabs,
    externalComponent?: ExternalComponent,
  |};
  /* --- Layout end  --- */

  /* --- Events --- */
  declare export type Unsubscribe = { remove(): void };

  declare export type EventsRegistry = $ReadOnly<{|
    registerAppLaunchedListener(() => void): Unsubscribe,

    bindComponent(componentInstance: {
      +componentDidAppear?: () => void,
      +componentDidDisappear?: () => void,
      +searchBarCancelPressed?: () => void,
      +navigationButtonPressed?: ({| buttonId: string |}) => void,
      +searchBarUpdated?: ({| text: string, isFocused: boolean |}) => void,
      +previewCompleted?: ({| previewComponentId: string |}) => void,
    }): Unsubscribe,

    registerComponentDidDisappearListener(
      (event: {|
        componentId: string,
        componentName: string,
      |}) => void
    ): Unsubscribe,

    registerComponentDidAppearListener(
      (event: {|
        componentId: string,
        componentName: string,
      |}) => void
    ): Unsubscribe,

    registerCommandListener(
      (
        name: string,
        event: {|
          commandId?: string,
          componentId?: string,
          layout?: {},
          options?: {},
        |}
      ) => void
    ): Unsubscribe,

    registerCommandCompletedListener(
      (event: {|
        commandId: string,
        completionTime: number,
        params?: {},
      |}) => void
    ): Unsubscribe,

    registerModalDismissedListener(
      (event: {|
        componentId: string,
        modalsDismissed: number,
      |}) => void
    ): Unsubscribe,

    registerBottomTabSelectedListener(
      (event: {|
        selectedTabIndex: number,
        unselectedTabIndex: number,
      |}) => void
    ): Unsubscribe,

    registerNavigationButtonPressedListener(
      (event: {|
        buttonId: string,
        componentId: string,
      |}) => void
    ): Unsubscribe,
  |}>;

  /* --- Events end  --- */

  declare export type GetComponentClassFunc = () => React$ComponentType<{
    componentId: string,
  }>;

  declare export var Navigation: {
    registerComponent(
      screenID: string | number,
      getComponentClassFunc: GetComponentClassFunc
    ): void,

    registerComponentWithRedux(
      screenID: string | number,
      getComponentClassFunc: GetComponentClassFunc,
      Provider: any,
      store: any
    ): void,

    setStackRoot(
      componentId: string,
      layout: Layout | Array<Layout>
    ): Promise<string>,

    setRoot<P: *>(LayoutRoot): string,
    setDefaultOptions(options: Options): void,
    mergeOptions(componentId: string, options: Options): void,
    showModal(layout: Layout): Promise<string>,
    dismissModal(componentId: string, mergeOptions?: Options): Promise<string>,
    dismissAllModals(mergeOptions?: Options): Promise<string>,
    push(componentId: string, layout: Layout): Promise<string>,
    pop(componentId: string, mergeOptions?: Options): Promise<string>,
    popTo(componentId: string, mergeOptions?: Options): Promise<string>,
    popToRoot(componentId: string, mergeOptions?: Options): Promise<string>,
    showOverlay(layout: Layout): Promise<string>,
    dismissOverlay(componentId: string): Promise<string>,
    events(): EventsRegistry,
    constants(): Promise<{|
      backButtonId: string,
      bottomTabsHeight: number,
      statusBarHeight: number,
      topBarHeight: number,
    |}>,
  };
}
