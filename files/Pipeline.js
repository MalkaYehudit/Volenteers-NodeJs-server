export default function buildPipe(smallPipe) {
    const pipeline = 
        [
            {
              '$lookup': {
                'from': 'Priority', 
                'localField': 'priority', 
                'foreignField': '_id', 
                'as': 'priority'
              }
            }, {
              '$lookup': {
                'from': 'Status', 
                'localField': 'status', 
                'foreignField': '_id', 
                'as': 'status'
              }
            }, {
              '$unwind': {
                'path': '$priority'
              }
            }, {
              '$unwind': {
                'path': '$status'
              }
            }, {
              '$set': {
                'status': '$status.Status', 
                'priority': '$priority.Priority'
              }
            }
          ]
    
    smallPipe.forEach(element => {
      pipeline.push(element);
    });

    return pipeline;
}