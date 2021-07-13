function semRetorno(...args: string[]): void {
  args.forEach((element) => {
    console.log(element);
  });
}

semRetorno('Ola', 'mundo');
