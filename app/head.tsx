export default function Head() {
  return (
    <>
      <title>Openmesh Xnode</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Openmesh Xnode" />
      <link
        rel="icon"
        href={`${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? process.env.NEXT_PUBLIC_BASE_PATH
            : ''
        }/openmesh-blue.png`}
      />
    </>
  )
}
