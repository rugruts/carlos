import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          padding: '50px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          DumpSack
        </div>
        <div style={{ fontSize: 40, marginBottom: 40 }}>
          Premium Wallet for Gorbagana & Solana
        </div>
        <div style={{ fontSize: 30, color: '#7BFF68' }}>
          Clean speed. Degen power.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}