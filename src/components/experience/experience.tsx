import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <section class="bg-white border-b py-8 text-black">
        <div class="container max-w-4xl mx-auto m-7 px-2">
          <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            Experience
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <table class="table-auto my-2">
            <tbody>
              <tr>
                <td class="border px-4 py-2">Nov. 2022 - Feb. 2023</td>
                <td class="border px-4 py-2">
                  Nest Fellow, the Oxford Robotics Institute, the University of Oxford.
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">Apr. 2022 - present</td>
                <td class="border px-4 py-2">
                  Assistant Professor, the Department of Precision Engineering, the University of
                  Tokyo.
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Aug. 2020 - Mar. 2022</td>
                <td class="border px-4 py-2">
                  Project Assistant Professor, the Department of Precision Engineering, the University
                  of Tokyo.
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">Apr. 2020 - July 2020</td>
                <td class="border px-4 py-2">
                  Project Academic Support Specialist, the Department of Precision Engineering, the
                  University of Tokyo.
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">July 2017 - June 2018</td>
                <td class="border px-4 py-2">
                  Visiting scholar, the Robotics Institute, Carnegie Mellon University.
                </td>
              </tr>
            </tbody>
          </table>
          <div class="m-2">
            Curriculum Vitae is available
            <a
              class="text-purple-800"
              href="https://docs.google.com/document/d/1w6csWrHToGvulIEXoLqsda6rxwoDNrrMbhohULy7mN8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;here [CV]
            </a>
            .
          </div>
        </div>
      </section>
    );
});
