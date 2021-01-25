export const myMean = (array: number[]): number => {
  /* TODO: add your code */
  let sum: number = 0;
  for (const num of array){
    sum += num;
  }
  return sum/ array.length;
};

export const getPrimes = (array: number[]): number[] => {
    /* TODO: add your code */
    let ans: number[] = [];
    for(const num of array){
        if (isPrime(num)){
            ans.push(num);
        }
    }
    return ans;
    
  };

export const isPrime = (num: number): boolean => {
    for(var i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return num > 1;
}

export const partition = (
    array: number[],
    belongToGroup1: (element: number) => boolean
  ): { group1: number[]; group2: number[] } => {
    /* TODO: add your code */
    let group1: number[] = [];
    let group2: number[] = [];
    for(const num of array){
        if (belongToGroup1(num)){
            group1.push(num);
        }else{
            group2.push(num);
        }
    }
    return {group1,group2};
  };

// TODO: You should replace this any with an accurate object type in your submission!
type Doggo = {name: string, age: number, breed: string};

export const makeSentences = (array: Doggo[]): string[] => {
  /* TODO: add your code */
  let ans: string[] = []
  for (const dog of array){
    const {name, age, breed} = dog;
    let text: string = `${name} is ${age} years old, and is a ${breed}`;
    ans.push(text);
  }
  return ans;
  
};

export const makeCorrectSentences = (array: Doggo[]): string[] => {
    /* TODO: add your code */
    let ans: string[] = []
    for (const dog of array){
      const {name, age, breed} = dog;
      let text: string;
      if(['A','E','I','O','U'].indexOf(breed[0]) > -1){
        text = `${name} is ${age} years old, and is an ${breed}`;
      }else{
        text = `${name} is ${age} years old, and is a ${breed}`;
      }
      ans.push(text);
    }
    return ans;
    
  };
