const Mutations = {
  async createItem(parents, args, ctx, info){
    // TODO: check if they are logged in
    const item = await ctx.db.mutation.createItem({
      data:{
        ...args
      }
    }, info);
    console.log(item);
    return item;
  }
  // createDog(parents, args, ctx, info){
    // global.dogs = global.dogs || [];

    // const newDog = {name: args.name};
    // global.dogs.push(newDog);
    // return newDog;
  // }
};

export default Mutations;
