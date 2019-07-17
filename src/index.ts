import prettier from 'prettier'
import { extname } from 'path';


export default (options: prettier.Options = {}) => {
  const genFile = async file => {

    if (!options.parser) {
      const ext = extname(file.projectPath)
      if (['.yaml', '.yml'].includes(ext)) options.parser = 'yaml'
      if (['.ts'].includes(ext)) options.parser = 'typescript'
      if (['.js', '.es'].includes(ext)) options.parser = 'babel'
      if (['.vue'].includes(ext)) options.parser = 'vue'
      if (['.json'].includes(ext)) options.parser = 'json'
      if (['.css'].includes(ext)) options.parser = 'css'
      if (['.less'].includes(ext)) options.parser = 'less'
      if (['.scss', '.sass'].includes(ext)) options.parser = 'scss'
      if (['.json'].includes(ext)) options.parser = 'json'
      if (['.md'].includes(ext)) options.parser = 'markdown'
      if (['.html'].includes(ext)) options.parser = 'html'
    }

    file.content = prettier.format(file.content, options)
  }

  return { genFile }
}
