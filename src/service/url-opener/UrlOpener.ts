
class UrlOpener {
    public openNewTab(url: string): void {
        window.open(url, 'other');
    }
}

export const urlOpener = new UrlOpener();