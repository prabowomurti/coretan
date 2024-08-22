import { ContextMenu, DefaultActionsMenu, DefaultHelpMenu, DefaultHelperButtons, DefaultKeyboardShortcutsDialog, DefaultMainMenu, DefaultMenuPanel, DefaultMinimap, DefaultNavigationPanel, DefaultPageMenu, DefaultQuickActions, DefaultSharePanel, DefaultStylePanel, DefaultToolbar, DefaultTopPanel, DefaultZoomMenu, TLUiComponents, Tldraw } from 'tldraw'
import './App.css'

// Hide the DebugPanel and DebugMenu components
const components: Required<TLUiComponents> = {
	ContextMenu: ContextMenu,
	ActionsMenu: DefaultActionsMenu,
	HelpMenu: DefaultHelpMenu,
	ZoomMenu: DefaultZoomMenu,
	MainMenu: DefaultMainMenu,
	Minimap: DefaultMinimap,
	StylePanel: DefaultStylePanel,
	PageMenu: DefaultPageMenu,
	NavigationPanel: DefaultNavigationPanel,
	Toolbar: DefaultToolbar,
	KeyboardShortcutsDialog: DefaultKeyboardShortcutsDialog,
	QuickActions: DefaultQuickActions,
	HelperButtons: DefaultHelperButtons,
	DebugPanel: null,
	DebugMenu: null,
	SharePanel: DefaultSharePanel,
	MenuPanel: DefaultMenuPanel,
	TopPanel: DefaultTopPanel,
	CursorChatBubble: null,
}

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw components={components} />
		</div>
	)
}

export default App
