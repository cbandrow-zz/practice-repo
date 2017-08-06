let DnaTranscriber = function(){
}

DnaTranscriber.prototype.toRna = function(genes){
  let splitGenes = genes.split('')

  if(splitGenes.length === 1){
    if(genes === 'C'){
      return genes = 'G'
    } else if (genes === 'G'){
      return genes = 'C'
    } else if (genes === 'A'){
      return genes = 'U'
    } else if (genes === 'T'){
      return genes = 'A'
    } else {
      throw new Error('Invalid input')
    }
  } else if (splitGenes.length > 1){

    let rnaSequence = splitGenes.map((gene) =>{
      if(gene === 'C'){
        return gene = 'G'
      } else if (gene === 'G'){
        return gene = 'C'
      } else if (gene === 'A'){
        return gene = 'U'
      } else if (gene === 'T'){
        return gene = 'A'
      } else {
        throw new Error('Invalid input')
      }
    }).join('')
    return rnaSequence
  }
}

module.exports = DnaTranscriber
