json.array! @reserves do |event|
  json.title event.usage
  json.start event.start_at
  json.end event.end_at
end