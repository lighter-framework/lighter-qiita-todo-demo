import Spark from '../lighter/spark'
import alac from '../lighter/alac'

var Tasks = new Spark('tasks')

Tasks.create = async function (name)
{
    return await this.request('create', {name})
}

Tasks.all = async function (name)
{
    var spark = this
    var tasks = await this.request('all').then(alac.resultData)
    var models = []

    tasks.forEach(task => {
        models.push(spark.getModel(task))
    })

    return models
}

export default Tasks