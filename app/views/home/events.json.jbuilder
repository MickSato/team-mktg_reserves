cache @reserves do
  json.array! @reserves do |event|
    cache event do
      json.title event.usage
      json.start event.start_at
      json.end event.end_at
    end
  end
end