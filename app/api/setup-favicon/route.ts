import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const publicLogo = path.join(process.cwd(), 'public', 'logo_h.png');
    const appIcon = path.join(process.cwd(), 'app', 'icon.png');
    const appFavicon = path.join(process.cwd(), 'app', 'favicon.ico');
    
    // Replace icon.png with the site logo
    fs.copyFileSync(publicLogo, appIcon);
    
    // Remove favicon.ico so Next.js uses icon.png
    if (fs.existsSync(appFavicon)) {
      fs.unlinkSync(appFavicon);
    }

    return NextResponse.json({ success: true, message: 'Favicon updated successfully' })
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message })
  }
}
