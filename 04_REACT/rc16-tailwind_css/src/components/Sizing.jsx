import React from 'react'

const Sizing = () => {
  return (
    <section className='container mx-auto px-4 md:px-8 py-4 ms:py-6'>
        <div className='text-center mb-12 sm:mb-16'>
            <h2>Sizing & Spacing</h2>
        </div>
        <div className='bg-green-600 space-y-12'>
            <div>
              <h3 className='text-xl font-semibold mb-6 text-neutral-200'>Width Examples</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 bg-blue-500 h-10 flex-center'>w-16</div>
                  <span className='text-neutral-700'>64px (w-16)</span>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='width-exp flex-center'>w-32</div>
                  <span>128px (w-32)</span>
                </div>
                <div>
                  <div>w-48</div>
                  <span>192px (w-48)</span>
                </div>
                <div>
                  <div>w-full</div>
                  <span>100% (w-full)</span>
                </div>
              </div>
            </div>

            <div>
              <h3>Height Examples</h3>
              <div className='flex items-end gap-6'>
                <div>
                  <div className='h-12 w-12 bg-purple-400 rounded mb-2'></div>
                  <span className='text-sm'>h-12</span>
                </div>
                <div>
                  <div className='h-24 w-24 bg-purple-400 rounded mb-2'></div>
                  <span className='text-sm'>h-24</span>
                </div>
                <div>
                  <div className='h-40 w-40 bg-purple-400 rounded mb-2'></div>
                  <span>h-40</span>
                </div>
              </div>
            </div>

            <div>
              <h3>Padding Examples</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <div>p-2 (8px)</div>
                </div>
                <div>
                  <div>p-6 (24px)</div>
                </div>
                <div>
                  <div>p-10 (40px)</div>
                </div>
              </div>
            </div>

            <div>
              <h3>Gap (Spacing between items)</h3>
              <div>
                <div>
                  <p>gap-2 (8px)</p>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div>
                  <p>gap-6 (24px)</p>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Sizing