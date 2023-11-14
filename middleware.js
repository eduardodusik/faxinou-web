import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'

export async function middleware(req) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({req, res})

    const {
        data: {user},
    } = await supabase.auth.getUser()


    console.log(user)

    // if user is signed in and the current path is / redirect the user to /account
    if (user && (req.nextUrl.pathname === '/')) {
        if (user.user_metadata.professional) {
            return NextResponse.redirect(new URL('/professional', req.url))
        }
        return NextResponse.redirect(new URL('/customer', req.url))
    }

    // if user is not signed in and the current path is not / redirect the user to /
    if (!user && req.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', req.url))
    }


    return res
}

export const config = {
    matcher: ['/', '/customer/:path*'],
}