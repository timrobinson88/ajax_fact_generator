class PagesController < ApplicationController
  def home
  end

  def randomize
    traits = ["Superfulously Studly", "Super Sexy", "Galliantly Gorgeous", "Perplexingly Perfect", "Aggressively Attractive", "Chillingly Chiseled", "Smokingly Saucy"]
    trait = traits.sample
    render json: {trait: trait}
  end
end
