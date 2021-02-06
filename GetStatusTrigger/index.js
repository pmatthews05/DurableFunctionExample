const df = require("durable-functions");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    context.log('JavaScript HTTP trigger function processed a request.');
    const runtimeStatus = [
        df.OrchestrationRuntimeStatus.Completed,
        df.OrchestrationRuntimeStatus.Running
    ];

    const instances = await client.getStatusBy(
        new Date(2017,1,1,10,1,0),
        new Date(2022,3,10,10,23,59),
        runtimeStatus
    )

    instances.forEach((instance) => {
        context.log(JSON.stringify(instance));
    }) 
    const responseMessage = `There were ${instances.length} instances returned`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}