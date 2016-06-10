
function collect_same_elements(collection_a, object_b) {
    var pz=[], s=0;
    for(var i=0 ;i<collection_a.length;i++ )
    for(var j=0 ;j<object_b.value.length; j++)
    if(object_b.value[j]===collection_a[i].key)
    {pz[s]=object_b.value[j];
        s++;
    }
    return pz ;
 //在此处写代码
}

module.exports = collect_same_elements;
