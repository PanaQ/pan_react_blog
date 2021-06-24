module.exports = options => {
    return async function adminauth(ctx, next) {
        console.log(ctx.session.openId)
        if (ctx.session.openId) {
            await next()
        } else {
            // await next()
            ctx.body = { data: '没有登录' }
        }
    }
}
