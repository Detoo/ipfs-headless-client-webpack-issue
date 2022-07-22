import { create } from 'ipfs-http-client'

module.exports.app = async (event: any, context: any): Promise<void> => {
  console.log("hello there")

  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
  })

  console.log(client)
}
