// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // My code below
  const pAequorFactory = (number, array) => {
    return {
      specimenNum: number,
      dna: array,
      mutate() {
        let i = Math.floor(Math.random() * 15);
        let randomBase = this.dna[i];
        while (randomBase === this.dna[i]) {
          randomBase = returnRandBase();
        }
        this.dna[i] = randomBase;
        return this.dna;
      },
      compareDNA(object) {
        let accumulator = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === object.dna[i]) {
            accumulator++;
          } 
        }
        let percent = (accumulator / this.dna.length) * 100;
        console.log(`Specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${percent.toFixed(1)}% DNA in common.`); 
      },
      willLikelySurvive() {
        let accumulator = 0;
        for (let base of this.dna) {
          if (base === 'G' || base === 'C') {
            accumulator++;
          }
        }
        let percent = (accumulator / this.dna.length) * 100;
        let isGreater = percent > 60;
        return isGreater;
      },
      complementStrand() {
        newStrand = [];
        for (let base of this.dna) {
          switch (base) {
            case 'A':
              newStrand.push('T');
              break;
            case 'T':
              newStrand.push('A');
              break;
            case 'C':
              newStrand.push('G');
              break;
            case 'G':
              newStrand.push('C');
              break;
          }
        }
        return newStrand;
      }
    };
  };
  
  //Test code
  let specimenArray = [];
  for (let i = 1; i <= 30; i++) {
    let newSpecimen = pAequorFactory(i, mockUpStrand());
    while (!newSpecimen.willLikelySurvive()) {
      newSpecimen = pAequorFactory(i, mockUpStrand());
    }
    specimenArray.push(newSpecimen);
  }
  console.log(specimenArray[4]);
  console.log(specimenArray[4].complementStrand());
  
  
  
  
  