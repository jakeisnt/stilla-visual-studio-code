module.exports = function theme(name, dark, light) {
    return {
        "name": name,
        "type": "dark",
        "semanticHighlighting": true,
        "colors": {
            "focusBorder": dark.color1,
            "foreground": dark.color4,
            "activityBar.background": dark.color0,
            "activityBar.dropBackground": dark.color1,
            "activityBar.foreground": dark.color4,
            "activityBar.activeBorder": dark.color8,
            "activityBar.activeBackground": dark.color1,
            "activityBarBadge.background": dark.color8,
            "activityBarBadge.foreground": dark.color0,
            "badge.foreground": dark.color0,
            "badge.background": dark.color8,
            "button.background": "#88c0d0ee",
            "button.foreground": dark.color0,
            "button.hoverBackground": dark.color8,
            "button.secondaryBackground": dark.color2,
            "button.secondaryForeground": dark.color4,
            "button.secondaryHoverBackground": dark.color3,
            "charts.red": dark.color11,
            "charts.blue": dark.color9,
            "charts.yellow": dark.color13,
            "charts.orange": dark.color12,
            "charts.green": dark.color14,
            "charts.purple": dark.color15,
            "charts.foreground": dark.color4,
            "charts.lines": dark.color8,
            "debugConsole.infoForeground": dark.color8,
            "debugConsole.warningForeground": dark.color13,
            "debugConsole.errorForeground": dark.color11,
            "debugConsole.sourceForeground": dark.color3_bright,
            "debugConsoleInputIcon.foreground": dark.color9,
            "debugExceptionWidget.background": dark.color3,
            "debugExceptionWidget.border": dark.color0,
            "debugToolBar.background": dark.color1,
            "descriptionForeground": "#d8dee9e6",
            "diffEditor.insertedTextBackground": "#81a1c133",
            "diffEditor.removedTextBackground": "#bf616a4d",
            "dropdown.background": dark.color1,
            "dropdown.border": dark.color1,
            "dropdown.foreground": dark.color4,
            "editorActiveLineNumber.foreground": "#d8dee9cc",
            "editorCursor.foreground": dark.color4,
            "editorHint.border": "#ebcb8b00",
            "editorHint.foreground": dark.color13,
            "editorIndentGuide.background": "#434c5eb3",
            "editorIndentGuide.activeBackground": dark.color3,
            "editorInlayHint.background": dark.color2,
            "editorInlayHint.foreground": dark.color4,
            "editorLineNumber.foreground": dark.color3,
            "editorLineNumber.activeForeground": dark.color4,
            "editorWhitespace.foreground": "#4c566ab3",
            "editorWidget.background": dark.color0,
            "editorWidget.border": dark.color1,
            "editor.background": dark.color0,
            "editor.foreground": dark.color4,
            "editor.hoverHighlightBackground": dark.color1,
            "editor.findMatchBackground": "#88c0d066",
            "editor.findMatchHighlightBackground": "#88c0d033",
            "editor.findRangeHighlightBackground": "#88c0d033",
            "editor.lineHighlightBackground": dark.color1,
            "editor.lineHighlightBorder": dark.color1,
            "editor.inactiveSelectionBackground": "#434c5ecc",
            "editor.inlineValuesBackground": dark.color3,
            "editor.inlineValuesForeground": dark.color6,
            "editor.selectionBackground": "#434c5ecc",
            "editor.selectionHighlightBackground": "#434c5ecc",
            "editor.rangeHighlightBackground": "#434c5e52",
            "editor.wordHighlightBackground": "#81a1c166",
            "editor.wordHighlightStrongBackground": "#81a1c199",
            "editor.stackFrameHighlightBackground": dark.color10,
            "editor.focusedStackFrameHighlightBackground": dark.color10,
            "editorError.foreground": dark.color11,
            "editorError.border": "#bf616a00",
            "editorWarning.foreground": dark.color13,
            "editorWarning.border": "#ebcb8b00",
            "editorBracketMatch.background": "#2e344000",
            "editorBracketMatch.border": dark.color8,
            "editorBracketHighlight.foreground1": dark.color7,
            "editorBracketHighlight.foreground2": dark.color8,
            "editorBracketHighlight.foreground3": dark.color9,
            "editorBracketHighlight.foreground4": dark.color10,
            "editorBracketHighlight.foreground5": dark.color7,
            "editorBracketHighlight.foreground6": dark.color8,
            "editorBracketHighlight.unexpectedBracket.foreground": dark.color11,
            "editorCodeLens.foreground": dark.color3,
            "editorGroup.background": dark.color0,
            "editorGroup.border": "#3b425201",
            "editorGroup.dropBackground": "#3b425299",
            "editorGroupHeader.border": dark.color1,
            "editorGroupHeader.noTabsBackground": dark.color0,
            "editorGroupHeader.tabsBackground": dark.color0,
            "editorGroupHeader.tabsBorder": dark.color1,
            "editorGutter.background": dark.color0,
            "editorGutter.modifiedBackground": dark.color13,
            "editorGutter.addedBackground": dark.color14,
            "editorGutter.deletedBackground": dark.color11,
            "editorHoverWidget.background": dark.color1,
            "editorHoverWidget.border": dark.color1,
            "editorLink.activeForeground": dark.color8,
            "editorMarkerNavigation.background": "#5e81acc0",
            "editorMarkerNavigationError.background": "#bf616ac0",
            "editorMarkerNavigationWarning.background": "#ebcb8bc0",
            "editorOverviewRuler.border": dark.color1,
            "editorOverviewRuler.currentContentForeground": dark.color1,
            "editorOverviewRuler.incomingContentForeground": dark.color1,
            "editorOverviewRuler.findMatchForeground": "#88c0d066",
            "editorOverviewRuler.rangeHighlightForeground": "#88c0d066",
            "editorOverviewRuler.selectionHighlightForeground": "#88c0d066",
            "editorOverviewRuler.wordHighlightForeground": "#88c0d066",
            "editorOverviewRuler.wordHighlightStrongForeground": "#88c0d066",
            "editorOverviewRuler.modifiedForeground": dark.color13,
            "editorOverviewRuler.addedForeground": dark.color14,
            "editorOverviewRuler.deletedForeground": dark.color11,
            "editorOverviewRuler.errorForeground": dark.color11,
            "editorOverviewRuler.warningForeground": dark.color13,
            "editorOverviewRuler.infoForeground": dark.color9,
            "editorRuler.foreground": dark.color2,
            "editorSuggestWidget.background": dark.color0,
            "editorSuggestWidget.border": dark.color1,
            "editorSuggestWidget.foreground": dark.color4,
            "editorSuggestWidget.focusHighlightForeground": dark.color8,
            "editorSuggestWidget.highlightForeground": dark.color8,
            "editorSuggestWidget.selectedBackground": dark.color2,
            "editorSuggestWidget.selectedForeground": dark.color4,
            "extensionButton.prominentForeground": dark.color4,
            "extensionButton.prominentBackground": dark.color2,
            "extensionButton.prominentHoverBackground": dark.color3,
            "errorForeground": dark.color11,
            "gitDecoration.modifiedResourceForeground": dark.color13,
            "gitDecoration.deletedResourceForeground": dark.color11,
            "gitDecoration.untrackedResourceForeground": dark.color14,
            "gitDecoration.ignoredResourceForeground": "#d8dee966",
            "gitDecoration.conflictingResourceForeground": dark.color10,
            "gitDecoration.submoduleResourceForeground": dark.color7,
            "gitDecoration.stageDeletedResourceForeground": dark.color11,
            "gitDecoration.stageModifiedResourceForeground": dark.color13,
            "input.background": dark.color1,
            "input.foreground": dark.color4,
            "input.placeholderForeground": "#d8dee999",
            "input.border": dark.color1,
            "inputOption.activeBackground": dark.color10,
            "inputOption.activeBorder": dark.color10,
            "inputOption.activeForeground": dark.color6,
            "inputValidation.errorBackground": dark.color11,
            "inputValidation.errorBorder": dark.color11,
            "inputValidation.infoBackground": dark.color9,
            "inputValidation.infoBorder": dark.color9,
            "inputValidation.warningBackground": dark.color12,
            "inputValidation.warningBorder": dark.color12,
            "keybindingLabel.background": dark.color3,
            "keybindingLabel.border": dark.color3,
            "keybindingLabel.bottomBorder": dark.color3,
            "keybindingLabel.foreground": dark.color4,
            "list.activeSelectionBackground": dark.color8,
            "list.activeSelectionForeground": dark.color0,
            "list.inactiveSelectionBackground": dark.color2,
            "list.inactiveSelectionForeground": dark.color4,
            "list.inactiveFocusBackground": "#434c5ecc",
            "list.hoverForeground": dark.color6,
            "list.focusForeground": dark.color4,
            "list.focusBackground": "#88c0d099",
            "list.focusHighlightForeground": dark.color6,
            "list.hoverBackground": dark.color1,
            "list.dropBackground": "#88c0d099",
            "list.highlightForeground": dark.color8,
            "list.errorForeground": dark.color11,
            "list.warningForeground": dark.color13,
            "merge.currentHeaderBackground": "#81a1c166",
            "merge.currentContentBackground": "#81a1c14d",
            "merge.incomingHeaderBackground": "#8fbcbb66",
            "merge.incomingContentBackground": "#8fbcbb4d",
            "merge.border": dark.color1,
            "minimap.background": dark.color0,
            "minimap.errorHighlight": "#bf616acc",
            "minimap.findMatchHighlight": dark.color8,
            "minimap.selectionHighlight": "#88c0d0cc",
            "minimap.warningHighlight": "#ebcb8bcc",
            "minimapGutter.addedBackground": dark.color14,
            "minimapGutter.deletedBackground": dark.color11,
            "minimapGutter.modifiedBackground": dark.color13,
            "minimapSlider.activeBackground": "#434c5eaa",
            "minimapSlider.background": "#434c5e99",
            "minimapSlider.hoverBackground": "#434c5eaa",

            /* `notification.*` keys are legacy support for VS Code versions >1.21.0 */
            "notification.background": dark.color1,
            "notification.buttonBackground": dark.color2,
            "notification.buttonForeground": dark.color4,
            "notification.buttonHoverBackground": dark.color3,
            "notification.errorBackground": dark.color11,
            "notification.errorForeground": dark.color0,
            "notification.foreground": dark.color4,
            "notification.infoBackground": dark.color8,
            "notification.infoForeground": dark.color0,
            "notification.warningBackground": dark.color13,
            "notification.warningForeground": dark.color0,

            "notificationCenter.border": dark.color1,
            "notificationCenterHeader.background": dark.color0,
            "notificationCenterHeader.foreground": dark.color8,
            "notificationLink.foreground": dark.color8,
            "notifications.background": dark.color1,
            "notifications.border": dark.color0,
            "notifications.foreground": dark.color4,
            "notificationToast.border": dark.color1,

            "panel.background": dark.color0,
            "panel.border": dark.color1,
            "panelTitle.activeBorder": dark.color8,
            "panelTitle.activeForeground": dark.color8,
            "panelTitle.inactiveForeground": dark.color4,
            "peekView.border": dark.color3,
            "peekViewEditor.background": dark.color0,
            "peekViewEditorGutter.background": dark.color0,
            "peekViewEditor.matchHighlightBackground": "#88c0d04d",
            "peekViewResult.background": dark.color0,
            "peekViewResult.fileForeground": dark.color8,
            "peekViewResult.lineForeground": "#d8dee966",
            "peekViewResult.matchHighlightBackground": "#88c0d0cc",
            "peekViewResult.selectionBackground": dark.color2,
            "peekViewResult.selectionForeground": dark.color4,
            "peekViewTitle.background": dark.color1,
            "peekViewTitleDescription.foreground": dark.color4,
            "peekViewTitleLabel.foreground": dark.color8,
            "pickerGroup.border": dark.color1,
            "pickerGroup.foreground": dark.color8,
            "progressBar.background": dark.color8,
            "quickInputList.focusBackground": dark.color8,
            "quickInputList.focusForeground": dark.color0,
            "sash.hoverBorder": dark.color8,
            "scrollbar.shadow": "#00000066",
            "scrollbarSlider.activeBackground": "#434c5eaa",
            "scrollbarSlider.background": "#434c5e99",
            "scrollbarSlider.hoverBackground": "#434c5eaa",
            "selection.background": "#88c0d099",
            "sideBar.background": dark.color0,
            "sideBar.foreground": dark.color4,
            "sideBar.border": dark.color1,
            "sideBarSectionHeader.background": dark.color1,
            "sideBarSectionHeader.foreground": dark.color4,
            "sideBarTitle.foreground": dark.color4,
            "statusBar.background": dark.color1,
            "statusBar.debuggingBackground": dark.color10,
            "statusBar.debuggingForeground": dark.color4,
            "statusBar.noFolderForeground": dark.color4,
            "statusBar.noFolderBackground": dark.color1,
            "statusBar.foreground": dark.color4,
            "statusBarItem.activeBackground": dark.color3,
            "statusBarItem.hoverBackground": dark.color2,
            "statusBarItem.prominentBackground": dark.color1,
            "statusBarItem.prominentHoverBackground": dark.color2,
            "statusBarItem.errorBackground": dark.color1,
            "statusBarItem.errorForeground": dark.color11,
            "statusBarItem.warningBackground": dark.color13,
            "statusBarItem.warningForeground": dark.color0,
            "statusBar.border": dark.color1,
            "tab.activeBackground": dark.color1,
            "tab.activeForeground": dark.color4,
            "tab.border": dark.color1,
            "tab.activeBorder": dark.color8,
            "tab.unfocusedActiveBorder": dark.color8,
            "tab.inactiveBackground": dark.color0,
            "tab.inactiveForeground": "#d8dee966",
            "tab.unfocusedActiveForeground": "#d8dee999",
            "tab.unfocusedInactiveForeground": "#d8dee966",
            "tab.hoverBackground": "#3b4252cc",
            "tab.unfocusedHoverBackground": "#3b4252b3",
            "tab.hoverBorder": dark.color8,
            "tab.unfocusedHoverBorder": dark.color8,
            "tab.activeBorderTop": dark.color8,
            "tab.unfocusedActiveBorderTop": dark.color8,
            "tab.lastPinnedBorder": dark.color3,
            "terminal.background": dark.color0,
            "terminal.foreground": dark.color4,
            "terminal.ansiBlack": dark.color1,
            "terminal.ansiRed": dark.color11,
            "terminal.ansiGreen": dark.color14,
            "terminal.ansiYellow": dark.color13,
            "terminal.ansiBlue": dark.color9,
            "terminal.ansiMagenta": dark.color15,
            "terminal.ansiCyan": dark.color8,
            "terminal.ansiWhite": dark.color5,
            "terminal.ansiBrightBlack": dark.color3,
            "terminal.ansiBrightRed": dark.color11,
            "terminal.ansiBrightGreen": dark.color14,
            "terminal.ansiBrightYellow": dark.color13,
            "terminal.ansiBrightBlue": dark.color9,
            "terminal.ansiBrightMagenta": dark.color15,
            "terminal.ansiBrightCyan": dark.color7,
            "terminal.ansiBrightWhite": dark.color6,
            "terminal.tab.activeBorder": dark.color8,
            "textBlockQuote.background": dark.color1,
            "textBlockQuote.border": dark.color9,
            "textCodeBlock.background": dark.color3,
            "textLink.activeForeground": dark.color8,
            "textLink.foreground": dark.color8,
            "textPreformat.foreground": dark.color7,
            "textSeparator.foreground": dark.color6,
            "titleBar.activeBackground": dark.color0,
            "titleBar.activeForeground": dark.color4,
            "titleBar.border": "#2e344000",
            "titleBar.inactiveBackground": dark.color0,
            "titleBar.inactiveForeground": "#d8dee966",
            "tree.indentGuidesStroke": dark.color3_bright,
            "walkThrough.embeddedEditorBackground": dark.color0,
            "welcomePage.buttonBackground": dark.color2,
            "welcomePage.buttonHoverBackground": dark.color3,
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
                    "foreground": dark.color3_bright
                }
            },
            {
                "name": "Constant Character",
                "scope": "constant.character",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "Constant Character Escape",
                "scope": "constant.character.escape",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "Constant Language",
                "scope": "constant.language",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Constant Numeric",
                "scope": "constant.numeric",
                "settings": {
                    "foreground": dark.color15
                }
            },
            {
                "name": "Constant Regexp",
                "scope": "constant.regexp",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "Entity Name Class/Type",
                "scope": ["entity.name.class", "entity.name.type.class"],
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "Entity Name Function",
                "scope": "entity.name.function",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "Entity Name Tag",
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Entity Other Attribute Name",
                "scope": "entity.other.attribute-name",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "Entity Other Inherited Class",
                "scope": "entity.other.inherited-class",
                "settings": {
                    "fontStyle": "bold",
                    "foreground": dark.color7
                }
            },
            {
                "name": "Invalid Deprecated",
                "scope": "invalid.deprecated",
                "settings": {
                    "foreground": dark.color4,
                    "background": dark.color13
                }
            },
            {
                "name": "Invalid Illegal",
                "scope": "invalid.illegal",
                "settings": {
                    "foreground": dark.color4,
                    "background": dark.color11
                }
            },
            {
                "name": "Keyword",
                "scope": "keyword",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Keyword Operator",
                "scope": "keyword.operator",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Keyword Other New",
                "scope": "keyword.other.new",
                "settings": {
                    "foreground": dark.color9
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
                    "foreground": dark.color13
                }
            },
            {
                "name": "Markup Deleted",
                "scope": "markup.deleted",
                "settings": {
                    "foreground": dark.color11
                }
            },
            {
                "name": "Markup Inserted",
                "scope": "markup.inserted",
                "settings": {
                    "foreground": dark.color14
                }
            },
            {
                "name": "Meta Preprocessor",
                "scope": "meta.preprocessor",
                "settings": {
                    "foreground": dark.color10
                }
            },
            {
                "name": "Punctuation",
                "scope": "punctuation",
                "settings": {
                    "foreground": dark.color6
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
                    "foreground": dark.color6
                }
            },
            {
                "name": "Punctuation Definition Tag",
                "scope": "punctuation.definition.tag",
                "settings": {
                    "foreground": dark.color9
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
                    "foreground": dark.color3_bright
                }
            },
            {
                "name": "Punctuation Section",
                "scope": "punctuation.section",
                "settings": {
                    "foreground": dark.color6
                }
            },
            {
                "name": "Punctuation Section Embedded",
                "scope": ["punctuation.section.embedded.begin", "punctuation.section.embedded.end"],
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Punctuation Terminator",
                "scope": "punctuation.terminator",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Punctuation Variable",
                "scope": "punctuation.definition.variable",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Storage",
                "scope": "storage",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "String",
                "scope": "string",
                "settings": {
                    "foreground": dark.color14
                }
            },
            {
                "name": "String Regexp",
                "scope": "string.regexp",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "Support Class",
                "scope": "support.class",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "Support Constant",
                "scope": "support.constant",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Support Function",
                "scope": "support.function",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "Support Function Construct",
                "scope": "support.function.construct",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Support Type",
                "scope": "support.type",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "Support Type Exception",
                "scope": "support.type.exception",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "Token Debug",
                "scope": "token.debug-token",
                "settings": {
                    "foreground": dark.color15
                }
            },
            {
                "name": "Token Error",
                "scope": "token.error-token",
                "settings": {
                    "foreground": dark.color11
                }
            },
            {
                "name": "Token Info",
                "scope": "token.info-token",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "Token Warning",
                "scope": "token.warn-token",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "Variable",
                "scope": "variable.other",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "Variable Language",
                "scope": "variable.language",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "Variable Parameter",
                "scope": "variable.parameter",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[C/CPP] Punctuation Separator Pointer-Access",
                "scope": "punctuation.separator.pointer-access.c",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[C/CPP] Meta Preprocessor Include",
                "scope": ["source.c meta.preprocessor.include", "source.c string.quoted.other.lt-gt.include"],
                "settings": {
                    "foreground": dark.color7
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
                    "foreground": dark.color10,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[CSS] Constant Other dark.color RGB Value",
                "scope": "source.css constant.other.color.rgb-value",
                "settings": {
                    "foreground": dark.color15
                }
            },
            {
                "name": "[CSS](Function) Meta Property-Value",
                "scope": "source.css meta.property-value",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[CSS] Media Queries",
                "scope": [
                    "source.css keyword.control.at-rule.media",
                    "source.css keyword.control.at-rule.media punctuation.definition.keyword"
                ],
                "settings": {
                    "foreground": dark.color12
                }
            },
            {
                "name": "[CSS] Punctuation Definition Keyword",
                "scope": "source.css punctuation.definition.keyword",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[CSS] Support Type Property Name",
                "scope": "source.css support.type.property-name",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[diff] Meta Range Context",
                "scope": "source.diff meta.diff.range.context",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[diff] Meta Header From-File",
                "scope": "source.diff meta.diff.header.from-file",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[diff] Punctuation Definition From-File",
                "scope": "source.diff punctuation.definition.from-file",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[diff] Punctuation Definition Range",
                "scope": "source.diff punctuation.definition.range",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[diff] Punctuation Definition Separator",
                "scope": "source.diff punctuation.definition.separator",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) module names",
                "scope": "entity.name.type.module.elixir",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) module attributes",
                "scope": "variable.other.readwrite.module.elixir",
                "settings": {
                    "foreground": dark.color4,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) atoms",
                "scope": "constant.other.symbol.elixir",
                "settings": {
                    "foreground": dark.color4,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "[Elixir](JakeBecker.elixir-ls) modules",
                "scope": "variable.other.constant.elixir",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Go] String Format Placeholder",
                "scope": "source.go constant.other.placeholder.go",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "[Java](JavaDoc) Comment Block Documentation HTML Entities",
                "scope": "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Java](JavaDoc) Constant Other",
                "scope": "source.java constant.other",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation",
                "scope": "source.java keyword.other.documentation",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation Author",
                "scope": "source.java keyword.other.documentation.author.javadoc",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation Directive/Custom",
                "scope": ["source.java keyword.other.documentation.directive", "source.java keyword.other.documentation.custom"],
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java](JavaDoc) Keyword Other Documentation See",
                "scope": "source.java keyword.other.documentation.see.javadoc",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java] Meta Method-Call",
                "scope": "source.java meta.method-call meta.method",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Java](JavaDoc) Meta Tag Template Link",
                "scope": ["source.java meta.tag.template.link.javadoc", "source.java string.other.link.title.javadoc"],
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java](JavaDoc) Meta Tag Template Value",
                "scope": "source.java meta.tag.template.value.javadoc",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Java](JavaDoc) Punctuation Definition Keyword",
                "scope": "source.java punctuation.definition.keyword.javadoc",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java](JavaDoc) Punctuation Definition Tag",
                "scope": [
                    "source.java punctuation.definition.tag.begin.javadoc",
                    "source.java punctuation.definition.tag.end.javadoc"
                ],
                "settings": {
                    "foreground": dark.color3_bright
                }
            },
            {
                "name": "[Java] Storage Modifier Import",
                "scope": "source.java storage.modifier.import",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java] Storage Modifier Package",
                "scope": "source.java storage.modifier.package",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java] Storage Type",
                "scope": "source.java storage.type",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java] Storage Type Annotation",
                "scope": "source.java storage.type.annotation",
                "settings": {
                    "foreground": dark.color12
                }
            },
            {
                "name": "[Java] Storage Type Generic",
                "scope": "source.java storage.type.generic",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Java] Storage Type Primitive",
                "scope": "source.java storage.type.primitive",
                "settings": {
                    "foreground": dark.color9
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
                    "foreground": dark.color12
                }
            },
            {
                "name": "[JavaScript] Meta Object-Literal Key",
                "scope": "source.js meta.object-literal.key",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[JavaScript](JSDoc) Storage Type Class",
                "scope": "source.js storage.type.class.jsdoc",
                "settings": {
                    "foreground": dark.color7
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
                    "foreground": dark.color9
                }
            },
            {
                "name": "[JavaScript] Interpolated String Template Punctuation Functions",
                "scope": "source.js string.quoted.template meta.method-call.with-arguments",
                "settings": {
                    "foreground": dark.color6
                }
            },
            {
                "name": "[JavaScript] String Template Literal Variable",
                "scope": [
                    "source.js string.template meta.template.expression support.variable.property",
                    "source.js string.template meta.template.expression variable.other.object"
                ],
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[JavaScript] Support Type Primitive",
                "scope": "source.js support.type.primitive",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[JavaScript] Variable Other Object",
                "scope": "source.js variable.other.object",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[JavaScript] Variable Other Read-Write Alias",
                "scope": "source.js variable.other.readwrite.alias",
                "settings": {
                    "foreground": dark.color7
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
                    "foreground": dark.color6
                }
            },
            {
                "name": "[HTML] Constant Character Entity",
                "scope": "text.html.basic constant.character.entity.html",
                "settings": {
                    "foreground": dark.color13
                }
            },
            {
                "name": "[HTML] Constant Other Inline-Data",
                "scope": "text.html.basic constant.other.inline-data",
                "settings": {
                    "foreground": dark.color12,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[HTML] Meta Tag SGML Doctype",
                "scope": "text.html.basic meta.tag.sgml.doctype",
                "settings": {
                    "foreground": dark.color10
                }
            },
            {
                "name": "[HTML] Punctuation Definition Entity",
                "scope": "text.html.basic punctuation.definition.entity",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[INI] Entity Name Section Group-Title",
                "scope": "source.properties entity.name.section.group-title.ini",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[INI] Punctuation Separator Key-Value",
                "scope": "source.properties punctuation.separator.key-value.ini",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Markdown] Markup Fenced Code Block",
                "scope": [
                    "text.html.markdown markup.fenced_code.block",
                    "text.html.markdown markup.fenced_code.block punctuation.definition"
                ],
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Markdown] Markup Heading",
                "scope": "markup.heading",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Markdown] Markup Inline",
                "scope": [
                    "text.html.markdown markup.inline.raw",
                    "text.html.markdown markup.inline.raw punctuation.definition.raw"
                ],
                "settings": {
                    "foreground": dark.color7
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
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Markdown] Markup Quote Punctuation Definition",
                "scope": "text.html.markdown beginning.punctuation.definition.quote",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[Markdown] Markup Quote Punctuation Definition",
                "scope": "text.html.markdown markup.quote",
                "settings": {
                    "foreground": dark.color3_bright
                }
            },
            {
                "name": "[Markdown] Markup Math Constant",
                "scope": "text.html.markdown constant.character.math.tex",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Markdown] Markup Math Definition Marker",
                "scope": [
                    "text.html.markdown punctuation.definition.math.begin",
                    "text.html.markdown punctuation.definition.math.end"
                ],
                "settings": {
                    "foreground": dark.color10
                }
            },
            {
                "name": "[Markdown] Markup Math Function Definition Marker",
                "scope": "text.html.markdown punctuation.definition.function.math.tex",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Markdown] Markup Math Operator",
                "scope": "text.html.markdown punctuation.math.operator.latex",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Markdown] Punctuation Definition Heading",
                "scope": "text.html.markdown punctuation.definition.heading",
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[Markdown] Punctuation Definition Constant/String",
                "scope": [
                    "text.html.markdown punctuation.definition.constant",
                    "text.html.markdown punctuation.definition.string"
                ],
                "settings": {
                    "foreground": dark.color9
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
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Perl] Perl Sigils",
                "scope": "source.perl punctuation.definition.variable",
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[PHP] Meta Function-Call Object",
                "scope": ["source.php meta.function-call", "source.php meta.function-call.object"],
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Python] Decorator",
                "scope": ["source.python entity.name.function.decorator", "source.python meta.function.decorator support.type"],
                "settings": {
                    "foreground": dark.color12
                }
            },
            {
                "name": "[Python] Function Call",
                "scope": "source.python meta.function-call.generic",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Python] Support Type",
                "scope": "source.python support.type",
                "settings": {
                    "foreground": dark.color8
                }
            },
            {
                "name": "[Python] Function Parameter",
                "scope": ["source.python variable.parameter.function.language"],
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[Python] Function Parameter Special",
                "scope": ["source.python meta.function.parameters variable.parameter.function.language.special.self"],
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[SCSS] Punctuation Definition Interpolation Bracket Curly",
                "scope": [
                    "source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
                    "source.css.scss punctuation.definition.interpolation.end.bracket.curly"
                ],
                "settings": {
                    "foreground": dark.color9
                }
            },
            {
                "name": "[SCSS] Variable Interpolation",
                "scope": "source.css.scss variable.interpolation",
                "settings": {
                    "foreground": dark.color4,
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
                    "foreground": dark.color12
                }
            },
            {
                "name": "[TypeScript] Object-literal keys",
                "scope": ["source.ts meta.object-literal.key", "source.tsx meta.object-literal.key"],
                "settings": {
                    "foreground": dark.color4
                }
            },
            {
                "name": "[TypeScript] Object-literal functions",
                "scope": [
                    "source.ts meta.object-literal.key entity.name.function",
                    "source.tsx meta.object-literal.key entity.name.function"
                ],
                "settings": {
                    "foreground": dark.color8
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
                    "foreground": dark.color7
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
                    "foreground": dark.color7
                }
            },
            {
                "name": "[TypeScript] Variables",
                "scope": ["source.ts support.variable", "source.tsx support.variable"],
                "settings": {
                    "foreground": dark.color4
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
                    "foreground": dark.color6
                }
            },
            {
                "name": "[XML] Entity Name Tag Namespace",
                "scope": "text.xml entity.name.tag.namespace",
                "settings": {
                    "foreground": dark.color7
                }
            },
            {
                "name": "[XML] Keyword Other Doctype",
                "scope": "text.xml keyword.other.doctype",
                "settings": {
                    "foreground": dark.color10
                }
            },
            {
                "name": "[XML] Meta Tag Preprocessor",
                "scope": "text.xml meta.tag.preprocessor entity.name.tag",
                "settings": {
                    "foreground": dark.color10
                }
            },
            {
                "name": "[XML] Entity Name Tag Namespace",
                "scope": ["text.xml string.unquoted.cdata", "text.xml string.unquoted.cdata punctuation.definition.string"],
                "settings": {
                    "foreground": dark.color12,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "[YAML] Entity Name Tag",
                "scope": "source.yaml entity.name.tag",
                "settings": {
                    "foreground": dark.color7
                }
            }
        ]
    };
}

