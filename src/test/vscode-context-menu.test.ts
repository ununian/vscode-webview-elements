import { expect } from '@open-wc/testing';
import { VscodeContextMenu } from '../vscode-context-menu';

describe('vscode-context-menu', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-context-menu');
    expect(el).to.instanceOf(VscodeContextMenu);
  });
});
