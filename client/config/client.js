const isLocal = window.location.href.indexOf('debug') !== -1 || false

export default {
    server: (process.env.NODE_ENV === 'development' || isLocal )?  'http://103.123.160.113:9999/' : '//www.qiufengh.com/',
}
