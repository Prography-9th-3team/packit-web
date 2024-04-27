const Home = () => {
  return (
    <main className=''>
      <h1 className='heading-5xl-bd text-primary'>Main Header</h1>
      <h1 className='heading-4xl-bd text-primary-hover'>Main Header</h1>
      <h1 className='heading-3xl-bd text-primary-pressed'>Main Header</h1>
      <h1 className='heading-2xl-bd text-secondary'>Main Header</h1>
      <h1 className='heading-xl-bd text-secondary-hover'>Main Header</h1>
      <h1 className='heading-lg text-secondary-pressed'>Main Header</h1>
      <h1 className='heading-md text-critical'>Main Header</h1>
      <h1 className='body-lg text-critical-hover'>Main body</h1>
      <h1 className='body-md text-critical-pressed'>Main body</h1>
      <h1 className='body-sm'>Main body</h1>
      <h1 className='label-3xl-bold'>Main label</h1>
      <h1 className='label-xl-bold'>Main label</h1>
      <h1 className='label-lg'>Main label</h1>
      <h1 className='label-md-bold'>Main label</h1>
      <div className='flex gap-16'>
        <button className='p-40 shadow-base'>button</button>
        <button className='p-40 shadow-md'>button</button>
        <button className='p-40 shadow-lg'>button</button>
      </div>
    </main>
  );
};

export default Home;
