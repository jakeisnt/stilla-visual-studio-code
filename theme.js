module.exports = function theme(name, {
    color0,
    color1,
    color2,
    color3,
    color3_bright,
    color4,
    color5,
    color6,
    color7,
    color8,
    color9,
    color10,
    color11,
    color12,
    color13,
    color14,
    color15,
}) {
    return {
        "name": name,
        "type": "dark",
        "semanticHighlighting": true,
        "colors": {
            "focusBorder": color1,
            "foreground": color4,
            "activityBar.background": color0,
            "activityBar.dropBackground": color1,
            "activityBar.foreground": color4,
            "activityBar.activeBorder": color8,
            "activityBar.activeBackground": color1,
            "activityBarBadge.background": color8,
            "activityBarBadge.foreground": color0,
            "badge.foreground": color0,
            "badge.background": color8,
            "button.background": "#88c0d0ee",
            "button.foreground": color0,
            "button.hoverBackground": color8,
            "button.secondaryBackground": color2,
            "button.secondaryForeground": color4,
            "button.secondaryHoverBackground": color3,
            "charts.red": color11,
            "charts.blue": color9,
            "charts.yellow": color13,
            "charts.orange": color12,
            "charts.green": color14,
            "charts.purple": color15,
            "charts.foreground": color4,
            "charts.lines": color8,
            "debugConsole.infoForeground": color8,
            "debugConsole.warningForeground": color13,
            "debugConsole.errorForeground": color11,
            "debugConsole.sourceForeground": color3_bright,
            "debugConsoleInputIcon.foreground": color9,
            "debugExceptionWidget.background": color3,
            "debugExceptionWidget.border": color0,
            "debugToolBar.background": color1,
            "descriptionForeground": "#d8dee9e6",
            "diffEditor.insertedTextBackground": "#81a1c133",
            "diffEditor.removedTextBackground": "#bf616a4d",
            "dropdown.background": color1,
            "dropdown.border": color1,
            "dropdown.foreground": color4,
            "editorActiveLineNumber.foreground": "#d8dee9cc",
            "editorCursor.foreground": color4,
            "editorHint.border": "#ebcb8b00",
            "editorHint.foreground": color13,
            "editorIndentGuide.background": "#434c5eb3",
            "editorIndentGuide.activeBackground": color3,
            "editorInlayHint.background": color2,
            "editorInlayHint.foreground": color4,
            "editorLineNumber.foreground": color3,
            "editorLineNumber.activeForeground": color4,
            "editorWhitespace.foreground": "#4c566ab3",
            "editorWidget.background": color0,
            "editorWidget.border": color1,
            "editor.background": color0,
            "editor.foreground": color4,
            "editor.hoverHighlightBackground": color1,
            "editor.findMatchBackground": "#88c0d066",
            "editor.findMatchHighlightBackground": "#88c0d033",
            "editor.findRangeHighlightBackground": "#88c0d033",
            "editor.lineHighlightBackground": color1,
            "editor.lineHighlightBorder": color1,
            "editor.inactiveSelectionBackground": "#434c5ecc",
            "editor.inlineValuesBackground": color3,
            "editor.inlineValuesForeground": color6,
            "editor.selectionBackground": "#434c5ecc",
            "editor.selectionHighlightBackground": "#434c5ecc",
            "editor.rangeHighlightBackground": "#434c5e52",
            "editor.wordHighlightBackground": "#81a1c166",
            "editor.wordHighlightStrongBackground": "#81a1c199",
            "editor.stackFrameHighlightBackground": color10,
            "editor.focusedStackFrameHighlightBackground": color10,
            "editorError.foreground": color11,
            "editorError.border": "#bf616a00",
            "editorWarning.foreground": color13,
            "editorWarning.border": "#ebcb8b00",
            "editorBracketMatch.background": "#2e344000",
            "editorBracketMatch.border": color8,
            "editorBracketHighlight.foreground1": color7,
            "editorBracketHighlight.foreground2": color8,
            "editorBracketHighlight.foreground3": color9,
            "editorBracketHighlight.foreground4": color10,
            "editorBracketHighlight.foreground5": color7,
            "editorBracketHighlight.foreground6": color8,
            "editorBracketHighlight.unexpectedBracket.foreground": color11,
            "editorCodeLens.foreground": color3,
            "editorGroup.background": color0,
            "editorGroup.border": "#3b425201",
            "editorGroup.dropBackground": "#3b425299",
            "editorGroupHeader.border": color1,
            "editorGroupHeader.noTabsBackground": color0,
            "editorGroupHeader.tabsBackground": color0,
            "editorGroupHeader.tabsBorder": color1,
            "editorGutter.background": color0,
            "editorGutter.modifiedBackground": color13,
            "editorGutter.addedBackground": color14,
            "editorGutter.deletedBackground": color11,
            "editorHoverWidget.background": color1,
            "editorHoverWidget.border": color1,
            "editorLink.activeForeground": color8,
            "editorMarkerNavigation.background": "#5e81acc0",
            "editorMarkerNavigationError.background": "#bf616ac0",
            "editorMarkerNavigationWarning.background": "#ebcb8bc0",
            "editorOverviewRuler.border": color1,
            "editorOverviewRuler.currentContentForeground": color1,
            "editorOverviewRuler.incomingContentForeground": color1,
            "editorOverviewRuler.findMatchForeground": "#88c0d066",
            "editorOverviewRuler.rangeHighlightForeground": "#88c0d066",
            "editorOverviewRuler.selectionHighlightForeground": "#88c0d066",
            "editorOverviewRuler.wordHighlightForeground": "#88c0d066",
            "editorOverviewRuler.wordHighlightStrongForeground": "#88c0d066",
            "editorOverviewRuler.modifiedForeground": color13,
            "editorOverviewRuler.addedForeground": color14,
            "editorOverviewRuler.deletedForeground": color11,
            "editorOverviewRuler.errorForeground": color11,
            "editorOverviewRuler.warningForeground": color13,
            "editorOverviewRuler.infoForeground": color9,
            "editorRuler.foreground": color2,
            "editorSuggestWidget.background": color0,
            "editorSuggestWidget.border": color1,
            "editorSuggestWidget.foreground": color4,
            "editorSuggestWidget.focusHighlightForeground": color8,
            "editorSuggestWidget.highlightForeground": color8,
            "editorSuggestWidget.selectedBackground": color2,
            "editorSuggestWidget.selectedForeground": color4,
            "extensionButton.prominentForeground": color4,
            "extensionButton.prominentBackground": color2,
            "extensionButton.prominentHoverBackground": color3,
            "errorForeground": color11,
            "gitDecoration.modifiedResourceForeground": color13,
            "gitDecoration.deletedResourceForeground": color11,
            "gitDecoration.untrackedResourceForeground": color14,
            "gitDecoration.ignoredResourceForeground": "#d8dee966",
            "gitDecoration.conflictingResourceForeground": color10,
            "gitDecoration.submoduleResourceForeground": color7,
            "gitDecoration.stageDeletedResourceForeground": color11,
            "gitDecoration.stageModifiedResourceForeground": color13,
            "input.background": color1,
            "input.foreground": color4,
            "input.placeholderForeground": "#d8dee999",
            "input.border": color1,
            "inputOption.activeBackground": color10,
            "inputOption.activeBorder": color10,
            "inputOption.activeForeground": color6,
            "inputValidation.errorBackground": color11,
            "inputValidation.errorBorder": color11,
            "inputValidation.infoBackground": color9,
            "inputValidation.infoBorder": color9,
            "inputValidation.warningBackground": color12,
            "inputValidation.warningBorder": color12,
            "keybindingLabel.background": color3,
            "keybindingLabel.border": color3,
            "keybindingLabel.bottomBorder": color3,
            "keybindingLabel.foreground": color4,
            "list.activeSelectionBackground": color8,
            "list.activeSelectionForeground": color0,
            "list.inactiveSelectionBackground": color2,
            "list.inactiveSelectionForeground": color4,
            "list.inactiveFocusBackground": "#434c5ecc",
            "list.hoverForeground": color6,
            "list.focusForeground": color4,
            "list.focusBackground": "#88c0d099",
            "list.focusHighlightForeground": color6,
            "list.hoverBackground": color1,
            "list.dropBackground": "#88c0d099",
            "list.highlightForeground": color8,
            "list.errorForeground": color11,
            "list.warningForeground": color13,
            "merge.currentHeaderBackground": "#81a1c166",
            "merge.currentContentBackground": "#81a1c14d",
            "merge.incomingHeaderBackground": "#8fbcbb66",
            "merge.incomingContentBackground": "#8fbcbb4d",
            "merge.border": color1,
            "minimap.background": color0,
            "minimap.errorHighlight": "#bf616acc",
            "minimap.findMatchHighlight": color8,
            "minimap.selectionHighlight": "#88c0d0cc",
            "minimap.warningHighlight": "#ebcb8bcc",
            "minimapGutter.addedBackground": color14,
            "minimapGutter.deletedBackground": color11,
            "minimapGutter.modifiedBackground": color13,
            "minimapSlider.activeBackground": "#434c5eaa",
            "minimapSlider.background": "#434c5e99",
            "minimapSlider.hoverBackground": "#434c5eaa",

            /* `notification.*` keys are legacy support for VS Code versions >1.21.0 */
            "notification.background": color1,
            "notification.buttonBackground": color2,
            "notification.buttonForeground": color4,
            "notification.buttonHoverBackground": color3,
            "notification.errorBackground": color11,
            "notification.errorForeground": color0,
            "notification.foreground": color4,
            "notification.infoBackground": color8,
            "notification.infoForeground": color0,
            "notification.warningBackground": color13,
            "notification.warningForeground": color0,

            "notificationCenter.border": color1,
            "notificationCenterHeader.background": color0,
            "notificationCenterHeader.foreground": color8,
            "notificationLink.foreground": color8,
            "notifications.background": color1,
            "notifications.border": color0,
            "notifications.foreground": color4,
            "notificationToast.border": color1,

            "panel.background": color0,
            "panel.border": color1,
            "panelTitle.activeBorder": color8,
            "panelTitle.activeForeground": color8,
            "panelTitle.inactiveForeground": color4,
            "peekView.border": color3,
            "peekViewEditor.background": color0,
            "peekViewEditorGutter.background": color0,
            "peekViewEditor.matchHighlightBackground": "#88c0d04d",
            "peekViewResult.background": color0,
            "peekViewResult.fileForeground": color8,
            "peekViewResult.lineForeground": "#d8dee966",
            "peekViewResult.matchHighlightBackground": "#88c0d0cc",
            "peekViewResult.selectionBackground": color2,
            "peekViewResult.selectionForeground": color4,
            "peekViewTitle.background": color1,
            "peekViewTitleDescription.foreground": color4,
            "peekViewTitleLabel.foreground": color8,
            "pickerGroup.border": color1,
            "pickerGroup.foreground": color8,
            "progressBar.background": color8,
            "quickInputList.focusBackground": color8,
            "quickInputList.focusForeground": color0,
            "sash.hoverBorder": color8,
            "scrollbar.shadow": "#00000066",
            "scrollbarSlider.activeBackground": "#434c5eaa",
            "scrollbarSlider.background": "#434c5e99",
            "scrollbarSlider.hoverBackground": "#434c5eaa",
            "selection.background": "#88c0d099",
            "sideBar.background": color0,
            "sideBar.foreground": color4,
            "sideBar.border": color1,
            "sideBarSectionHeader.background": color1,
            "sideBarSectionHeader.foreground": color4,
            "sideBarTitle.foreground": color4,
            "statusBar.background": color1,
            "statusBar.debuggingBackground": color10,
            "statusBar.debuggingForeground": color4,
            "statusBar.noFolderForeground": color4,
            "statusBar.noFolderBackground": color1,
            "statusBar.foreground": color4,
            "statusBarItem.activeBackground": color3,
            "statusBarItem.hoverBackground": color2,
            "statusBarItem.prominentBackground": color1,
            "statusBarItem.prominentHoverBackground": color2,
            "statusBarItem.errorBackground": color1,
            "statusBarItem.errorForeground": color11,
            "statusBarItem.warningBackground": color13,
            "statusBarItem.warningForeground": color0,
            "statusBar.border": color1,
            "tab.activeBackground": color1,
            "tab.activeForeground": color4,
            "tab.border": color1,
            "tab.activeBorder": color8,
            "tab.unfocusedActiveBorder": color8,
            "tab.inactiveBackground": color0,
            "tab.inactiveForeground": "#d8dee966",
            "tab.unfocusedActiveForeground": "#d8dee999",
            "tab.unfocusedInactiveForeground": "#d8dee966",
            "tab.hoverBackground": "#3b4252cc",
            "tab.unfocusedHoverBackground": "#3b4252b3",
            "tab.hoverBorder": color8,
            "tab.unfocusedHoverBorder": color8,
            "tab.activeBorderTop": color8,
            "tab.unfocusedActiveBorderTop": color8,
            "tab.lastPinnedBorder": color3,
            "terminal.background": color0,
            "terminal.foreground": color4,
            "terminal.ansiBlack": color1,
            "terminal.ansiRed": color11,
            "terminal.ansiGreen": color14,
            "terminal.ansiYellow": color13,
            "terminal.ansiBlue": color9,
            "terminal.ansiMagenta": color15,
            "terminal.ansiCyan": color8,
            "terminal.ansiWhite": color5,
            "terminal.ansiBrightBlack": color3,
            "terminal.ansiBrightRed": color11,
            "terminal.ansiBrightGreen": color14,
            "terminal.ansiBrightYellow": color13,
            "terminal.ansiBrightBlue": color9,
            "terminal.ansiBrightMagenta": color15,
            "terminal.ansiBrightCyan": color7,
            "terminal.ansiBrightWhite": color6,
            "terminal.tab.activeBorder": color8,
            "textBlockQuote.background": color1,
            "textBlockQuote.border": color9,
            "textCodeBlock.background": color3,
            "textLink.activeForeground": color8,
            "textLink.foreground": color8,
            "textPreformat.foreground": color7,
            "textSeparator.foreground": color6,
            "titleBar.activeBackground": color0,
            "titleBar.activeForeground": color4,
            "titleBar.border": "#2e344000",
            "titleBar.inactiveBackground": color0,
            "titleBar.inactiveForeground": "#d8dee966",
            "tree.indentGuidesStroke": color3_bright,
            "walkThrough.embeddedEditorBackground": color0,
            "welcomePage.buttonBackground": color2,
            "welcomePage.buttonHoverBackground": color3,
            "widget.shadow": "#00000066"
        },
        "tokenColors": [
            {
                "settings": {
                    "foreground": "#d8dee9ff",
                    "background": "#2e3440ff"
                }
            },
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "name": "Comment",
                "scope": "comment",
                "settings": {
                    "foreground": color3_bright
                }
            },
            {
                "name": "Constant Character",
                "scope": "constant.character",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Constant Character Escape",
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Constant Language",
                "scope": "constant.language",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Constant Numeric",
                "scope": "constant.numeric",
                "settings": {
                    "foreground": color15
                }
            },
            {
                "name": "Constant Regexp",
                "scope": "constant.regexp",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Entity Name Class/Type",
                "scope": ["entity.name.class", "entity.name.type.class"],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "Entity Name Function",
                "scope": "entity.name.function",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "Entity Name Tag",
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Entity Other Attribute Name",
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "Entity Other Inherited Class",
                "scope": "entity.other.inherited-class",
                "settings": {
                    "fontStyle": "bold",
                    "foreground": color7
                }
            },
            {
                "name": "Invalid Deprecated",
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": color4,
                    "background": color13
                }
            },
            {
                "name": "Invalid Illegal",
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": color4,
                    "background": color11
                }
            },
            {
                "name": "Keyword",
                "scope": "keyword",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Keyword Operator",
                "scope": "keyword.operator",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Keyword Other New",
                "scope": "keyword.other.new",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Markup Bold",
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "name": "Markup Changed",
                "scope": "markup.changed",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Markup Deleted",
                "scope": "markup.deleted",
                "settings": {
                    "foreground": color11
                }
            },
            {
                "name": "Markup Inserted",
                "scope": "markup.inserted",
                "settings": {
                    "foreground": color14
                }
            },
            {
                "name": "Meta Preprocessor",
                "scope": "meta.preprocessor",
                "settings": {
                    "foreground": color10
                }
            },
            {
                "name": "Punctuation",
                "scope": "punctuation",
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "Punctuation Definition Parameters",
                "scope": [
                    "punctuation.definition.method-parameters",
                    "punctuation.definition.function-parameters",
                    "punctuation.definition.parameters"
                ],
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "Punctuation Definition Tag",
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Punctuation Definition Comment",
                "scope": [
                    "punctuation.definition.comment",
                    "punctuation.end.definition.comment",
                    "punctuation.start.definition.comment"
                ],
                "settings": {
                    "foreground": color3_bright
                }
            },
            {
                "name": "Punctuation Section",
                "scope": "punctuation.section",
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "Punctuation Section Embedded",
                "scope": ["punctuation.section.embedded.begin", "punctuation.section.embedded.end"],
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Punctuation Terminator",
                "scope": "punctuation.terminator",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Punctuation Variable",
                "scope": "punctuation.definition.variable",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Storage",
                "scope": "storage",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "String",
                "scope": "string",
                "settings": {
                    "foreground": color14
                }
            },
            {
                "name": "String Regexp",
                "scope": "string.regexp",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Support Class",
                "scope": "support.class",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "Support Constant",
                "scope": "support.constant",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Support Function",
                "scope": "support.function",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "Support Function Construct",
                "scope": "support.function.construct",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Support Type",
                "scope": "support.type",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "Support Type Exception",
                "scope": "support.type.exception",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "Token Debug",
                "scope": "token.debug-token",
                "settings": {
                    "foreground": color15
                }
            },
            {
                "name": "Token Error",
                "scope": "token.error-token",
                "settings": {
                    "foreground": color11
                }
            },
            {
                "name": "Token Info",
                "scope": "token.info-token",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "Token Warning",
                "scope": "token.warn-token",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "Variable",
                "scope": "variable.other",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "Variable Language",
                "scope": "variable.language",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "Variable Parameter",
                "scope": "variable.parameter",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[C/CPP] Punctuation Separator Pointer-Access",
                "scope": "punctuation.separator.pointer-access.c",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[C/CPP] Meta Preprocessor Include",
                "scope": ["source.c meta.preprocessor.include", "source.c string.quoted.other.lt-gt.include"],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[C/CPP] Conditional Directive",
                "scope": [
                    "source.cpp keyword.control.directive.conditional",
                    "source.cpp punctuation.definition.directive",
                    "source.c keyword.control.directive.conditional",
                    "source.c punctuation.definition.directive"
                ],
                "settings": {
                    "foreground": color10,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[CSS] Constant Other Color RGB Value",
                "scope": "source.css constant.other.color.rgb-value",
                "settings": {
                    "foreground": color15
                }
            },
            {
                "name": "[CSS](Function) Meta Property-Value",
                "scope": "source.css meta.property-value",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[CSS] Media Queries",
                "scope": [
                    "source.css keyword.control.at-rule.media",
                    "source.css keyword.control.at-rule.media punctuation.definition.keyword"
                ],
                "settings": {
                    "foreground": color12
                }
            },
            {
                "name": "[CSS] Punctuation Definition Keyword",
                "scope": "source.css punctuation.definition.keyword",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[CSS] Support Type Property Name",
                "scope": "source.css support.type.property-name",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[diff] Meta Range Context",
                "scope": "source.diff meta.diff.range.context",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[diff] Meta Header From-File",
                "scope": "source.diff meta.diff.header.from-file",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[diff] Punctuation Definition From-File",
                "scope": "source.diff punctuation.definition.from-file",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[diff] Punctuation Definition Range",
                "scope": "source.diff punctuation.definition.range",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[diff] Punctuation Definition Separator",
                "scope": "source.diff punctuation.definition.separator",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) module names",
                "scope": "entity.name.type.module.elixir",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) module attributes",
                "scope": "variable.other.readwrite.module.elixir",
                "settings": {
                    "foreground": color4,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) atoms",
                "scope": "constant.other.symbol.elixir",
                "settings": {
                    "foreground": color4,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) modules",
                "scope": "variable.other.constant.elixir",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Go] String Format Placeholder",
                "scope": "source.go constant.other.placeholder.go",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "[Java](JavaDoc) Comment Block Documentation HTML Entities",
                "scope": "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Java](JavaDoc) Constant Other",
                "scope": "source.java constant.other",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation",
                "scope": "source.java keyword.other.documentation",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation Author",
                "scope": "source.java keyword.other.documentation.author.javadoc",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation Directive/Custom",
                "scope": ["source.java keyword.other.documentation.directive", "source.java keyword.other.documentation.custom"],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation See",
                "scope": "source.java keyword.other.documentation.see.javadoc",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java] Meta Method-Call",
                "scope": "source.java meta.method-call meta.method",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Java](JavaDoc) Meta Tag Template Link",
                "scope": ["source.java meta.tag.template.link.javadoc", "source.java string.other.link.title.javadoc"],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java](JavaDoc) Meta Tag Template Value",
                "scope": "source.java meta.tag.template.value.javadoc",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Java](JavaDoc) Punctuation Definition Keyword",
                "scope": "source.java punctuation.definition.keyword.javadoc",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java](JavaDoc) Punctuation Definition Tag",
                "scope": [
                    "source.java punctuation.definition.tag.begin.javadoc",
                    "source.java punctuation.definition.tag.end.javadoc"
                ],
                "settings": {
                    "foreground": color3_bright
                }
            },
            {
                "name": "[Java] Storage Modifier Import",
                "scope": "source.java storage.modifier.import",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java] Storage Modifier Package",
                "scope": "source.java storage.modifier.package",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java] Storage Type",
                "scope": "source.java storage.type",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java] Storage Type Annotation",
                "scope": "source.java storage.type.annotation",
                "settings": {
                    "foreground": color12
                }
            },
            {
                "name": "[Java] Storage Type Generic",
                "scope": "source.java storage.type.generic",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Java] Storage Type Primitive",
                "scope": "source.java storage.type.primitive",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[JavaScript] Decorator",
                "scope": [
                    "source.js punctuation.decorator",
                    "source.js meta.decorator variable.other.readwrite",
                    "source.js meta.decorator entity.name.function"
                ],
                "settings": {
                    "foreground": color12
                }
            },
            {
                "name": "[JavaScript] Meta Object-Literal Key",
                "scope": "source.js meta.object-literal.key",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[JavaScript](JSDoc) Storage Type Class",
                "scope": "source.js storage.type.class.jsdoc",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[JavaScript] String Template Literals Punctuation",
                "scope": [
                    "source.js string.quoted.template punctuation.quasi.element.begin",
                    "source.js string.quoted.template punctuation.quasi.element.end",
                    "source.js string.template punctuation.definition.template-expression"
                ],
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[JavaScript] Interpolated String Template Punctuation Functions",
                "scope": "source.js string.quoted.template meta.method-call.with-arguments",
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "[JavaScript] String Template Literal Variable",
                "scope": [
                    "source.js string.template meta.template.expression support.variable.property",
                    "source.js string.template meta.template.expression variable.other.object"
                ],
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[JavaScript] Support Type Primitive",
                "scope": "source.js support.type.primitive",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[JavaScript] Variable Other Object",
                "scope": "source.js variable.other.object",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[JavaScript] Variable Other Read-Write Alias",
                "scope": "source.js variable.other.readwrite.alias",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[JavaScript] Parentheses in Template Strings",
                "scope": [
                    "source.js meta.embedded.line meta.brace.square",
                    "source.js meta.embedded.line meta.brace.round",
                    /* Required for extension `mgmcdermott.vscode-language-babel`. */
                    "source.js string.quoted.template meta.brace.square",
                    "source.js string.quoted.template meta.brace.round"
                ],
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "[HTML] Constant Character Entity",
                "scope": "text.html.basic constant.character.entity.html",
                "settings": {
                    "foreground": color13
                }
            },
            {
                "name": "[HTML] Constant Other Inline-Data",
                "scope": "text.html.basic constant.other.inline-data",
                "settings": {
                    "foreground": color12,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[HTML] Meta Tag SGML Doctype",
                "scope": "text.html.basic meta.tag.sgml.doctype",
                "settings": {
                    "foreground": color10
                }
            },
            {
                "name": "[HTML] Punctuation Definition Entity",
                "scope": "text.html.basic punctuation.definition.entity",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[INI] Entity Name Section Group-Title",
                "scope": "source.properties entity.name.section.group-title.ini",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[INI] Punctuation Separator Key-Value",
                "scope": "source.properties punctuation.separator.key-value.ini",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] Markup Fenced Code Block",
                "scope": [
                    "text.html.markdown markup.fenced_code.block",
                    "text.html.markdown markup.fenced_code.block punctuation.definition"
                ],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Markdown] Markup Heading",
                "scope": "markup.heading",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Markdown] Markup Inline",
                "scope": [
                    "text.html.markdown markup.inline.raw",
                    "text.html.markdown markup.inline.raw punctuation.definition.raw"
                ],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Markdown] Markup Italic",
                "scope": "text.html.markdown markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[Markdown] Markup Link",
                "scope": "text.html.markdown markup.underline.link",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "name": "[Markdown] Markup List Numbered/Unnumbered",
                "scope": "text.html.markdown beginning.punctuation.definition.list",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] Markup Quote Punctuation Definition",
                "scope": "text.html.markdown beginning.punctuation.definition.quote",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[Markdown] Markup Quote Punctuation Definition",
                "scope": "text.html.markdown markup.quote",
                "settings": {
                    "foreground": color3_bright
                }
            },
            {
                "name": "[Markdown] Markup Math Constant",
                "scope": "text.html.markdown constant.character.math.tex",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] Markup Math Definition Marker",
                "scope": [
                    "text.html.markdown punctuation.definition.math.begin",
                    "text.html.markdown punctuation.definition.math.end"
                ],
                "settings": {
                    "foreground": color10
                }
            },
            {
                "name": "[Markdown] Markup Math Function Definition Marker",
                "scope": "text.html.markdown punctuation.definition.function.math.tex",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Markdown] Markup Math Operator",
                "scope": "text.html.markdown punctuation.math.operator.latex",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] Punctuation Definition Heading",
                "scope": "text.html.markdown punctuation.definition.heading",
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] Punctuation Definition Constant/String",
                "scope": [
                    "text.html.markdown punctuation.definition.constant",
                    "text.html.markdown punctuation.definition.string"
                ],
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[Markdown] String Other Link Description/Title",
                "scope": [
                    "text.html.markdown constant.other.reference.link",
                    "text.html.markdown string.other.link.description",
                    "text.html.markdown string.other.link.title"
                ],
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Perl] Perl Sigils",
                "scope": "source.perl punctuation.definition.variable",
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[PHP] Meta Function-Call Object",
                "scope": ["source.php meta.function-call", "source.php meta.function-call.object"],
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Python] Decorator",
                "scope": ["source.python entity.name.function.decorator", "source.python meta.function.decorator support.type"],
                "settings": {
                    "foreground": color12
                }
            },
            {
                "name": "[Python] Function Call",
                "scope": "source.python meta.function-call.generic",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Python] Support Type",
                "scope": "source.python support.type",
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[Python] Function Parameter",
                "scope": ["source.python variable.parameter.function.language"],
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[Python] Function Parameter Special",
                "scope": ["source.python meta.function.parameters variable.parameter.function.language.special.self"],
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[SCSS] Punctuation Definition Interpolation Bracket Curly",
                "scope": [
                    "source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
                    "source.css.scss punctuation.definition.interpolation.end.bracket.curly"
                ],
                "settings": {
                    "foreground": color9
                }
            },
            {
                "name": "[SCSS] Variable Interpolation",
                "scope": "source.css.scss variable.interpolation",
                "settings": {
                    "foreground": color4,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[TypeScript] Decorators",
                "scope": [
                    "source.ts punctuation.decorator",
                    "source.ts meta.decorator variable.other.readwrite",
                    "source.ts meta.decorator entity.name.function",
                    "source.tsx punctuation.decorator",
                    "source.tsx meta.decorator variable.other.readwrite",
                    "source.tsx meta.decorator entity.name.function"
                ],
                "settings": {
                    "foreground": color12
                }
            },
            {
                "name": "[TypeScript] Object-literal keys",
                "scope": ["source.ts meta.object-literal.key", "source.tsx meta.object-literal.key"],
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[TypeScript] Object-literal functions",
                "scope": [
                    "source.ts meta.object-literal.key entity.name.function",
                    "source.tsx meta.object-literal.key entity.name.function"
                ],
                "settings": {
                    "foreground": color8
                }
            },
            {
                "name": "[TypeScript] Type/Class",
                "scope": [
                    "source.ts support.class",
                    "source.ts support.type",
                    "source.ts entity.name.type",
                    "source.ts entity.name.class",
                    "source.tsx support.class",
                    "source.tsx support.type",
                    "source.tsx entity.name.type",
                    "source.tsx entity.name.class"
                ],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[TypeScript] Static Class Support",
                "scope": [
                    "source.ts support.constant.math",
                    "source.ts support.constant.dom",
                    "source.ts support.constant.json",
                    "source.tsx support.constant.math",
                    "source.tsx support.constant.dom",
                    "source.tsx support.constant.json"
                ],
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[TypeScript] Variables",
                "scope": ["source.ts support.variable", "source.tsx support.variable"],
                "settings": {
                    "foreground": color4
                }
            },
            {
                "name": "[TypeScript] Parentheses in Template Strings",
                "scope": [
                    "source.ts meta.embedded.line meta.brace.square",
                    "source.ts meta.embedded.line meta.brace.round",
                    "source.tsx meta.embedded.line meta.brace.square",
                    "source.tsx meta.embedded.line meta.brace.round"
                ],
                "settings": {
                    "foreground": color6
                }
            },
            {
                "name": "[XML] Entity Name Tag Namespace",
                "scope": "text.xml entity.name.tag.namespace",
                "settings": {
                    "foreground": color7
                }
            },
            {
                "name": "[XML] Keyword Other Doctype",
                "scope": "text.xml keyword.other.doctype",
                "settings": {
                    "foreground": color10
                }
            },
            {
                "name": "[XML] Meta Tag Preprocessor",
                "scope": "text.xml meta.tag.preprocessor entity.name.tag",
                "settings": {
                    "foreground": color10
                }
            },
            {
                "name": "[XML] Entity Name Tag Namespace",
                "scope": ["text.xml string.unquoted.cdata", "text.xml string.unquoted.cdata punctuation.definition.string"],
                "settings": {
                    "foreground": color12,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[YAML] Entity Name Tag",
                "scope": "source.yaml entity.name.tag",
                "settings": {
                    "foreground": color7
                }
            }
        ]
    };
}

