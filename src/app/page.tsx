export default function Home() {
  return (
    <main className=''>
      <h1 className='typo-h-5xl text-primary'>Main Header</h1>
      <h1 className='typo-h-4xl text-primary-hover'>Main Header</h1>
      <h1 className='typo-h-3xl text-primary-pressed'>Main Header</h1>
      <h1 className='typo-h-2xl text-secondary'>Main Header</h1>
      <h1 className='typo-h-xl text-secondary-hover'>Main Header</h1>
      <h1 className='typo-h-lg text-secondary-pressed'>Main Header</h1>
      <h1 className='typo-h-md text-critcal'>Main Header</h1>
      <h1 className='typo-b-lg text-critcal-hover'>Main body</h1>
      <h1 className='typo-b-md text-critcal-pressed'>Main body</h1>
      <h1 className='typo-b-sm'>Main body</h1>
      <h1 className='typo-l-3xl-bold'>Main label</h1>
      <h1 className='typo-l-xl-bold'>Main label</h1>
      <h1 className='typo-l-lg-bold'>Main label</h1>
      <h1 className='typo-l-md-bold'>Main label</h1>
      <div className='flex gap-16'>
        <button className='p-40 shadow-base'>button</button>
        <button className='p-40 shadow-md'>button</button>
        <button className='p-40 shadow-lg'>button</button>
      </div>
    </main>
  );
}
