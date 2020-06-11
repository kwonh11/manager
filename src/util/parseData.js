export default (headers , groupings) => {
  console.log(`data parsing!!!!`)
    return (Object.values(headers).filter(v=>v).map((value,index) => {
      return {
        title : value,
        field : value,
        grouping : groupings[index]
      }
    }));
  }