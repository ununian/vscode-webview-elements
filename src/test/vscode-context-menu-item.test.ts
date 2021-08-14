import { expect } from '@open-wc/testing';
import { VscodeContextMenuItem } from '../vscode-context-menu-item';

describe('vscode-context-menu-item', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-context-menu-item');
    expect(el).to.instanceOf(VscodeContextMenuItem);
  });
});
