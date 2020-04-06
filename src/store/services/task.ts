import feathersClient,{makeServicePlugin, BaseModel} from '@/feathers_client'

class Task extends BaseModel {
  constructor(data: any, options: any) {
    super(data, options)
  }

  static modelName = 'Task'
}

const servicePath = 'task'
const servicePlugin = makeServicePlugin({
  Model: Task,
  service: feathersClient.service(servicePath),
  servicePath
})

feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
  }
})

export default servicePlugin
