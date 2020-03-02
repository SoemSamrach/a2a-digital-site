module.exports = {
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    },

    pluginOptions: {
        prerenderSpa: {
          registry: undefined,
          renderRoutes: [
            '/about',
            '/contact',
            '/servicedetail/ai',
            '/servicedetail/pwa',
            '/servicedetail/blockchain',
            '/servicedetail/iot',
            '/servicedetail/arvr',
            '/servicedetail/marketing',
            '/servicedetail/cc',
            '/servicedetail/odoo',
            '/servicedetail/rpa',
            '/servicedetail/cybersecurity',
            '/servicedetail/security',
            '/solutiondetail/hrm',
            '/solutiondetail/mapping',
            '/solutiondetail/kpi',
            '/solutiondetail/ls',
            '/solutiondetail/contactcenter',
            '/solutiondetail/qrcode',
            '/solutiondetail/sms',
            '/',
          ],
          useRenderEvent: true,
          headless: true,
          onlyProduction: true,
          postProcess: route => {
            // Defer scripts and tell Vue it's been server rendered to trigger hydration
            route.html = route.html
              .replace(/<script (.*?)>/g, '<script $1 defer>')
              .replace('id="app"', 'id="app" data-server-rendered="true"');
            return route;
          }
        }
      }
}
