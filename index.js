const cloudformed = {
  api: (...args) => fetch('https://api.cfd/' + args.join('/'))
}

export default cloudformed
