import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { chdir } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
chdir(path.join(__dirname, '../../'));
const filePath = path.join(__dirname, 'assets/Recetaejemplo.pdf');

console.log('Directorio de trabajo actual:',process.cwd()+'AtPlaywrightSB/tests/assets/Recetaejemplo.pdf');
console.log('Directorio de trabajo actual:',path.join(process.cwd(),'AtPlaywrightSB/tests/assets/Recetaejemplo.pdf'));

test('Test Con receta', async ({ page }) => {
  await page.goto('https://staging2.salcobrandonline.cl/');
  await page.getByRole('button', { name: 'Mantener ubicación' }).click();
  await page.getByRole('link', { name: 'Icon account' }).click();
  await page.getByPlaceholder('Ej: constanza@mail.com').click();
  await page.getByPlaceholder('Ej: constanza@mail.com').fill('rbenavides@sb.cl');
  await page.getByPlaceholder('Ej: constanza@mail.com').press('Tab');
  await page.locator('#spree_user_password').press('CapsLock');
  await page.locator('#spree_user_password').fill('X');
  await page.locator('#spree_user_password').press('CapsLock');
  await page.locator('#spree_user_password').fill('Xeneizes42');
  await page.locator('#spree_user_password').press('Enter')
  //const isLoggedIn = await page.isVisible('img');
  const isLoggedIn = await page.isVisible('body.one-col.christmas-pattern:nth-child(2) header.large:nth-child(6) div.navbar.navbar-default.navbar-main.bg-white div.container div.site-header div.col-md-12.search-header.pr-0:nth-child(1) div.floating-nav__content div.icon-menu ul.navbar-nav.navbar-right.list-inline.icons-list li.user-options:nth-child(4) div:nth-child(1) span.user-options-content.logged-in.tooltips a.dropdown-toggle > div.user-name__wrapper');
  if (isLoggedIn) {
    console.log('Login Correcto');
}   else {
   console.log('Login Incorrecto');
   
}
  await page.goto('https://staging2.salcobrandonline.cl/?m_cod=2');
  await page.goto('https://staging2.salcobrandonline.cl/?');
  await page.getByPlaceholder('¿Qué estás buscando?').click();
  await page.getByPlaceholder('¿Qué estás buscando?').fill(' 581046');
  await page.getByRole('link', { name: 'Principio Activo: Paracetamol' }).click();
  await page.getByRole('button', { name: 'Añadir al carro', exact: true }).click();
  await page.getByText('Ir a pagar').click();
  await page.getByRole('link', { name: 'Ir a Pagar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.setInputFiles('input[type="file"]', filePath);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('tab', { name: 'Despacho a domicilio' }).click();
  await page.getByRole('button', { name: 'Continuar a medios de pago' }).click();
  await page.getByRole('button', { name: 'WebPay method Redcompra /' }).click();
  await page.click('input[name="tos"]');
  await page.getByRole('button', { name: 'Realizar pago' }).click();
  await page.goto('https://staging2.salcobrandonline.cl/webpay_ws_mall?action=update&controller=spree%2Fapi%2Fv2%2Fcheckouts');
  await page.goto('https://webpay3gint.transbank.cl/webpayserver/init_transaction.cgi');
  await page.goto('https://webpay3gint.transbank.cl/webpayserver/dist/index.html');
  await page.goto('https://webpay3gint.transbank.cl/webpayserver/dist/#/');
  //await page.click('input[name="tos"]'); buscar el input del boton reqliao
  await page.getByRole('button', { name: 'Débito' }).click();
  await page.getByRole('button', { name: 'Banco Selecciona tu banco' }).click();
  await page.getByRole('button', { name: 'TEST COMMERCE BANK' }).click();
  await page.getByPlaceholder('XXXX XXXX XXXX XXXX').click();
  await page.getByPlaceholder('XXXX XXXX XXXX XXXX').fill('5555 5555 5555 5555 55555');
  await page.getByRole('button', { name: 'Pagar $' }).click();
  await page.locator('#rutClient').click();
  await page.locator('#rutClient').fill('11111111-1');
  await page.locator('#rutClient').press('Tab');
  await page.locator('#passwordClient').fill('123');
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.goto('https://staging2.salcobrandonline.cl/webpay_ws_mall/confirmation');
  await page.goto('https://webpay3gint.transbank.cl/webpayserver/voucher.cgi');
  await page.getByRole('link', { name: 'Volver a la tienda' }).click();
});