import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, MarkdownView, MarkdownSourceView } from 'obsidian';
import { format } from 'date-fns'


export default class ZettelkastenCommandPlugin extends Plugin {

    get editor(): CodeMirror.Editor {
        const view = this.app.workspace.activeLeaf.view;
        if (!(view instanceof MarkdownView)) return null;

        const sourceView = view.sourceMode;
        return (sourceView as MarkdownSourceView).cmEditor;
    }

    async onload() {
        this.addCommand({
            id: 'insert-zettel-id',
            name: 'Insert Zettel ID',
            callback: () => {
                this.insertZettelID();
            },
            hotkeys: [{ modifiers: ['Ctrl', 'Shift'], key: 'u' }]
        });

    }

    onunload() {
        // console.log('unloading plugin');
    }

    async insertZettelID() {
        let zettel_id: string = format(new Date(), 'yyyyMMddHHmm')
        this.editor.replaceRange(zettel_id, this.editor.getCursor());
    }

}
