const ModelsTable = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Models Table Section Title */}
        <div className="flex justify-center mb-8">
          <h3 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70">
            [ MODELS TABLE ]
          </h3>
        </div>
        
        {/* Models Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full border-collapse border border-white/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Model</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Published</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Completed</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Parameters</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Context window</th>
                  <th className="border border-white/20 px-4 py-3 text-left text-white/80 font-medium">Tokens Trained</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Mini</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Unknown</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Medium</td>
                  <td className="border border-white/20 px-4 py-3 text-white">No</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Failed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">505Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Forgotten</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Small</td>
                  <td className="border border-white/20 px-4 py-3 text-white">No</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Failed</td>
                  <td className="border border-white/20 px-4 py-3 text-white">125Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">200M+Approx.</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes - Huge success</td>
                  <td className="border border-white/20 px-4 py-3 text-white">51Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">1024</td>
                  <td className="border border-white/20 px-4 py-3 text-white">693Million</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny_V2</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Not Yet</td>
                  <td className="border border-white/20 px-4 py-3 text-white">Yes - Success</td>
                  <td className="border border-white/20 px-4 py-3 text-white">60Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">4096</td>
                  <td className="border border-white/20 px-4 py-3 text-white">400Million+</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <td className="border border-white/20 px-4 py-3 text-white">Rx_Codex_V1_Tiny_V3</td>
                  <td className="border border-white/20 px-4 py-3 text-white">In development</td>
                  <td className="border border-white/20 px-4 py-3 text-white">In development</td>
                  <td className="border border-white/20 px-4 py-3 text-white">70Million</td>
                  <td className="border border-white/20 px-4 py-3 text-white">4096</td>
                  <td className="border border-white/20 px-4 py-3 text-white">In development</td>
                </tr>
              </tbody>
            </table>
            
            {/* Table Footer */}
            <div className="flex justify-center items-center mt-4 text-white/60 text-sm">
              <span className="flex items-center">
                Model Table |
                <img src="/og-logo.png" alt="Rx Codex Logo" className="w-5 h-5 object-contain mx-1" />
                Rx Codex AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsTable;