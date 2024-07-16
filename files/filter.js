function filters(props) {
    const pipeline = []   
    if(props){
        if(props.status){
            pipeline.push({ '$match':{status: props.status}})
        }
        if(props.priority){
            pipeline.push({ '$match':{priority: props.priority}})
        }
    }
    return pipeline;
}

function byId(id){
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}
export {byId};

export default filters;