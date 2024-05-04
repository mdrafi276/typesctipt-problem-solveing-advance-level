{
  // interface - generic

  interface Developer<T, x = null> {
    name:string;
    computer: {
      brand:string;
      model: string;
      releaseYear: number;
    }
    smartWatch: T ;
    bike?: x;
  }
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<EmilabWatch> ={
    name:'parsian',
    computer:{
      brand:'asus',
      model:'x-25SUR',
      releaseYear:2023,
    },
    smartWatch: {
      brand:'emilab',
      model: 'k266',
      display:'oled',
    }
  }

  interface AppleWatch  {
    brand: string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;
  }
  interface YamahaBike {
    model:string;
    enginCapacity:string
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> ={
    name:'Rich Developer',
    computer:{
      brand:'HP',
      model:'x-SUR',
      releaseYear:2024,
    },
    smartWatch: {
      brand:'apple watch',
      model: 'k',
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: 'yamaha',
      enginCapacity: "1500cc"
    }
  }
}