import React from "react";
import {
  Users,
  PenTool as Tool,
  Hammer,
  Trophy,
  CheckCircle2,
} from "lucide-react";
const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 px-6 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto ">
        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold mb-8 dark:text-white">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Hammer className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Superior Craftsmanship
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We use high-quality materials and advanced manufacturing
                  techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Innovative Designs
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Modern, space-saving, and aesthetically pleasing solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Tool className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Customization
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailor-made designs to meet individual customer needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Industry Partnerships
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Collaborations with top brands ensure premium quality and
                  reliability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Customer Satisfaction
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  A commitment to quality and service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
