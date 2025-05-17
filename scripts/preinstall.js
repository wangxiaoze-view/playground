import fs from 'fs'
import pkg from '../package.json' assert { type: 'json' }
import { spawn } from 'child_process'
function bootstrap() {
  pkg.dependencies['functional-helpers'] = 'file:./lib-functional-helpers.tar.gz'
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
  spawn('bash', ['./install.sh'])
  console.log('✅脚本执行完成...')
}
bootstrap()
