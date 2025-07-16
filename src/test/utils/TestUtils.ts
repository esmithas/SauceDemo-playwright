import { Page } from 'playwright';

export class TestUtils {
    constructor(private page: Page) {}

    /**
     * Espera a que un elemento esté visible
     */
    async waitForElement(selector: string, timeout: number = 5000): Promise<void> {
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
    }

    /**
     * Toma una captura de pantalla con timestamp
     */
    async takeScreenshot(name: string): Promise<Buffer> {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        return await this.page.screenshot({
            path: `./reports/evidencies/${name}-${timestamp}.png`,
            fullPage: true
        });
    }

    /**
     * Genera datos aleatorios para testing
     */
    generateRandomData() {
        return {
            firstName: `Test${Math.random().toString(36).substring(7)}`,
            lastName: `User${Math.random().toString(36).substring(7)}`,
            address: `Address ${Math.floor(Math.random() * 1000)}`,
            city: `City${Math.floor(Math.random() * 100)}`,
            phone: `9${Math.floor(Math.random() * 90000000) + 10000000}`
        };
    }

    /**
     * Valida que una tabla contenga los datos esperados
     */
    async validateTableData(tableSelector: string, expectedData: any[]): Promise<boolean> {
        const rows = await this.page.locator(tableSelector).all();
        return rows.length === expectedData.length;
    }
} 